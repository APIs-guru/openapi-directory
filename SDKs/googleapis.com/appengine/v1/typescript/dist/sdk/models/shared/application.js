var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UrlDispatchRule } from "./urldispatchrule";
import { FeatureSettings } from "./featuresettings";
import { IdentityAwareProxy } from "./identityawareproxy";
export var ApplicationDatabaseTypeEnum;
(function (ApplicationDatabaseTypeEnum) {
    ApplicationDatabaseTypeEnum["DatabaseTypeUnspecified"] = "DATABASE_TYPE_UNSPECIFIED";
    ApplicationDatabaseTypeEnum["CloudDatastore"] = "CLOUD_DATASTORE";
    ApplicationDatabaseTypeEnum["CloudFirestore"] = "CLOUD_FIRESTORE";
    ApplicationDatabaseTypeEnum["CloudDatastoreCompatibility"] = "CLOUD_DATASTORE_COMPATIBILITY";
})(ApplicationDatabaseTypeEnum || (ApplicationDatabaseTypeEnum = {}));
export var ApplicationServingStatusEnum;
(function (ApplicationServingStatusEnum) {
    ApplicationServingStatusEnum["Unspecified"] = "UNSPECIFIED";
    ApplicationServingStatusEnum["Serving"] = "SERVING";
    ApplicationServingStatusEnum["UserDisabled"] = "USER_DISABLED";
    ApplicationServingStatusEnum["SystemDisabled"] = "SYSTEM_DISABLED";
})(ApplicationServingStatusEnum || (ApplicationServingStatusEnum = {}));
// Application
/**
 * An Application resource contains the top-level configuration of an App Engine application.
**/
var Application = /** @class */ (function (_super) {
    __extends(Application, _super);
    function Application() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authDomain" }),
        __metadata("design:type", String)
    ], Application.prototype, "authDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codeBucket" }),
        __metadata("design:type", String)
    ], Application.prototype, "codeBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseType" }),
        __metadata("design:type", String)
    ], Application.prototype, "databaseType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultBucket" }),
        __metadata("design:type", String)
    ], Application.prototype, "defaultBucket", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultCookieExpiration" }),
        __metadata("design:type", String)
    ], Application.prototype, "defaultCookieExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultHostname" }),
        __metadata("design:type", String)
    ], Application.prototype, "defaultHostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dispatchRules", elemType: UrlDispatchRule }),
        __metadata("design:type", Array)
    ], Application.prototype, "dispatchRules", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=featureSettings" }),
        __metadata("design:type", FeatureSettings)
    ], Application.prototype, "featureSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcrDomain" }),
        __metadata("design:type", String)
    ], Application.prototype, "gcrDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iap" }),
        __metadata("design:type", IdentityAwareProxy)
    ], Application.prototype, "iap", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Application.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], Application.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Application.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], Application.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servingStatus" }),
        __metadata("design:type", String)
    ], Application.prototype, "servingStatus", void 0);
    return Application;
}(SpeakeasyBase));
export { Application };
