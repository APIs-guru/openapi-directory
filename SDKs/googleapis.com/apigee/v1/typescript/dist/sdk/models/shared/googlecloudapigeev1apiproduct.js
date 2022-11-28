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
import { GoogleCloudApigeeV1Attribute } from "./googlecloudapigeev1attribute";
import { GoogleCloudApigeeV1GraphQlOperationGroup } from "./googlecloudapigeev1graphqloperationgroup";
import { GoogleCloudApigeeV1OperationGroup } from "./googlecloudapigeev1operationgroup";
export var GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum;
(function (GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum) {
    GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum["QuotaCounterScopeUnspecified"] = "QUOTA_COUNTER_SCOPE_UNSPECIFIED";
    GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum["Proxy"] = "PROXY";
    GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum["Operation"] = "OPERATION";
})(GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum || (GoogleCloudApigeeV1ApiProductQuotaCounterScopeEnum = {}));
var GoogleCloudApigeeV1ApiProduct = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1ApiProduct, _super);
    function GoogleCloudApigeeV1ApiProduct() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiResources" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "apiResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=approvalType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "approvalType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes", elemType: GoogleCloudApigeeV1Attribute }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environments" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "environments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=graphqlOperationGroup" }),
        __metadata("design:type", GoogleCloudApigeeV1GraphQlOperationGroup)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "graphqlOperationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=operationGroup" }),
        __metadata("design:type", GoogleCloudApigeeV1OperationGroup)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "operationGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=proxies" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "proxies", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quota" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "quota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaCounterScope" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "quotaCounterScope", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaInterval" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "quotaInterval", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quotaTimeUnit" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "quotaTimeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopes" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1ApiProduct.prototype, "scopes", void 0);
    return GoogleCloudApigeeV1ApiProduct;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1ApiProduct };
