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
import { GoogleCloudApigeeV1AddonsConfigInput } from "./googlecloudapigeev1addonsconfig";
import { GoogleCloudApigeeV1Properties } from "./googlecloudapigeev1properties";
export var GoogleCloudApigeeV1OrganizationBillingTypeEnum;
(function (GoogleCloudApigeeV1OrganizationBillingTypeEnum) {
    GoogleCloudApigeeV1OrganizationBillingTypeEnum["BillingTypeUnspecified"] = "BILLING_TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1OrganizationBillingTypeEnum["Subscription"] = "SUBSCRIPTION";
    GoogleCloudApigeeV1OrganizationBillingTypeEnum["Evaluation"] = "EVALUATION";
    GoogleCloudApigeeV1OrganizationBillingTypeEnum["Payg"] = "PAYG";
})(GoogleCloudApigeeV1OrganizationBillingTypeEnum || (GoogleCloudApigeeV1OrganizationBillingTypeEnum = {}));
export var GoogleCloudApigeeV1OrganizationRuntimeTypeEnum;
(function (GoogleCloudApigeeV1OrganizationRuntimeTypeEnum) {
    GoogleCloudApigeeV1OrganizationRuntimeTypeEnum["RuntimeTypeUnspecified"] = "RUNTIME_TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1OrganizationRuntimeTypeEnum["Cloud"] = "CLOUD";
    GoogleCloudApigeeV1OrganizationRuntimeTypeEnum["Hybrid"] = "HYBRID";
})(GoogleCloudApigeeV1OrganizationRuntimeTypeEnum || (GoogleCloudApigeeV1OrganizationRuntimeTypeEnum = {}));
export var GoogleCloudApigeeV1OrganizationTypeEnum;
(function (GoogleCloudApigeeV1OrganizationTypeEnum) {
    GoogleCloudApigeeV1OrganizationTypeEnum["TypeUnspecified"] = "TYPE_UNSPECIFIED";
    GoogleCloudApigeeV1OrganizationTypeEnum["TypeTrial"] = "TYPE_TRIAL";
    GoogleCloudApigeeV1OrganizationTypeEnum["TypePaid"] = "TYPE_PAID";
    GoogleCloudApigeeV1OrganizationTypeEnum["TypeInternal"] = "TYPE_INTERNAL";
})(GoogleCloudApigeeV1OrganizationTypeEnum || (GoogleCloudApigeeV1OrganizationTypeEnum = {}));
var GoogleCloudApigeeV1OrganizationInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1OrganizationInput, _super);
    function GoogleCloudApigeeV1OrganizationInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=addonsConfig" }),
        __metadata("design:type", GoogleCloudApigeeV1AddonsConfigInput)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "addonsConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analyticsRegion" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "analyticsRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorizedNetwork" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "authorizedNetwork", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "billingType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "customerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=portalDisabled" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "portalDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", GoogleCloudApigeeV1Properties)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeDatabaseEncryptionKeyName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "runtimeDatabaseEncryptionKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runtimeType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "runtimeType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1OrganizationInput.prototype, "type", void 0);
    return GoogleCloudApigeeV1OrganizationInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1OrganizationInput };
