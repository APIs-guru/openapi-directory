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
import { GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings } from "./googlecloudassuredworkloadsv1beta1workloadcjissettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1beta1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedramphighsettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings } from "./googlecloudassuredworkloadsv1beta1workloadil4settings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1beta1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1beta1workloadresourceinfo";
export var GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;
(function (GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum) {
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["ComplianceRegimeUnspecified"] = "COMPLIANCE_REGIME_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["Il4"] = "IL4";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["Cjis"] = "CJIS";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["FedrampHigh"] = "FEDRAMP_HIGH";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["FedrampModerate"] = "FEDRAMP_MODERATE";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["UsRegionalAccess"] = "US_REGIONAL_ACCESS";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["Hipaa"] = "HIPAA";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["Hitrust"] = "HITRUST";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["EuRegionsAndSupport"] = "EU_REGIONS_AND_SUPPORT";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["CaRegionsAndSupport"] = "CA_REGIONS_AND_SUPPORT";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["Itar"] = "ITAR";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["AuRegionsAndUsSupport"] = "AU_REGIONS_AND_US_SUPPORT";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["AssuredWorkloadsForPartners"] = "ASSURED_WORKLOADS_FOR_PARTNERS";
    GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum["IsrRegions"] = "ISR_REGIONS";
})(GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum || (GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum = {}));
export var GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;
(function (GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum) {
    GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum["PartnerUnspecified"] = "PARTNER_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum["LocalControlsByS3Ns"] = "LOCAL_CONTROLS_BY_S3NS";
    GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum["SovereignControlsByTSystems"] = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS";
})(GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum || (GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum = {}));
export var GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum;
(function (GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum) {
    GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum["KajEnrollmentStateUnspecified"] = "KAJ_ENROLLMENT_STATE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum["KajEnrollmentStatePending"] = "KAJ_ENROLLMENT_STATE_PENDING";
    GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum["KajEnrollmentStateComplete"] = "KAJ_ENROLLMENT_STATE_COMPLETE";
})(GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum || (GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum = {}));
// GoogleCloudAssuredworkloadsV1beta1WorkloadInput
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
var GoogleCloudAssuredworkloadsV1beta1WorkloadInput = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1beta1WorkloadInput, _super);
    function GoogleCloudAssuredworkloadsV1beta1WorkloadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "billingAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cjisSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "cjisSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceRegime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "complianceRegime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceStatus" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "complianceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSovereignControls" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "enableSovereignControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fedrampHighSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "fedrampHighSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fedrampModerateSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "fedrampModerateSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=il4Settings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "il4Settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "kmsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partner" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "provisionedResourcesParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "resourceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse)
    ], GoogleCloudAssuredworkloadsV1beta1WorkloadInput.prototype, "saaEnrollmentResponse", void 0);
    return GoogleCloudAssuredworkloadsV1beta1WorkloadInput;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1beta1WorkloadInput };
// GoogleCloudAssuredworkloadsV1beta1Workload
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
var GoogleCloudAssuredworkloadsV1beta1Workload = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1beta1Workload, _super);
    function GoogleCloudAssuredworkloadsV1beta1Workload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billingAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "billingAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cjisSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "cjisSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceRegime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "complianceRegime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=complianceStatus" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "complianceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=compliantButDisallowedServices" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "compliantButDisallowedServices", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enableSovereignControls" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "enableSovereignControls", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fedrampHighSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "fedrampHighSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fedrampModerateSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "fedrampModerateSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=il4Settings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "il4Settings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kajEnrollmentState" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "kajEnrollmentState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "kmsSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=partner" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "partner", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "provisionedResourcesParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "resourceSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse)
    ], GoogleCloudAssuredworkloadsV1beta1Workload.prototype, "saaEnrollmentResponse", void 0);
    return GoogleCloudAssuredworkloadsV1beta1Workload;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1beta1Workload };
