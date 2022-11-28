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
import { GoogleCloudApigeeV1DatastoreConfig } from "./googlecloudapigeev1datastoreconfig";
// GoogleCloudApigeeV1Datastore
/**
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
var GoogleCloudApigeeV1Datastore = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1Datastore, _super);
    function GoogleCloudApigeeV1Datastore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastoreConfig" }),
        __metadata("design:type", GoogleCloudApigeeV1DatastoreConfig)
    ], GoogleCloudApigeeV1Datastore.prototype, "datastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastUpdateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=org" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "org", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "self", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1Datastore.prototype, "targetType", void 0);
    return GoogleCloudApigeeV1Datastore;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1Datastore };
// GoogleCloudApigeeV1DatastoreInput
/**
 * The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.
**/
var GoogleCloudApigeeV1DatastoreInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1DatastoreInput, _super);
    function GoogleCloudApigeeV1DatastoreInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datastoreConfig" }),
        __metadata("design:type", GoogleCloudApigeeV1DatastoreConfig)
    ], GoogleCloudApigeeV1DatastoreInput.prototype, "datastoreConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DatastoreInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=targetType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1DatastoreInput.prototype, "targetType", void 0);
    return GoogleCloudApigeeV1DatastoreInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1DatastoreInput };
