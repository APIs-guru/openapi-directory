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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";
export var GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
(function (GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum) {
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["ComplianceRegimeUnspecified"] = "COMPLIANCE_REGIME_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["Il4"] = "IL4";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["Cjis"] = "CJIS";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["FedrampHigh"] = "FEDRAMP_HIGH";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["FedrampModerate"] = "FEDRAMP_MODERATE";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["UsRegionalAccess"] = "US_REGIONAL_ACCESS";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["Hipaa"] = "HIPAA";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["Hitrust"] = "HITRUST";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["EuRegionsAndSupport"] = "EU_REGIONS_AND_SUPPORT";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["CaRegionsAndSupport"] = "CA_REGIONS_AND_SUPPORT";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["Itar"] = "ITAR";
    GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum["AssuredWorkloadsForPartners"] = "ASSURED_WORKLOADS_FOR_PARTNERS";
})(GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum || (GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum = {}));
export var GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum;
(function (GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum) {
    GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum["KajEnrollmentStateUnspecified"] = "KAJ_ENROLLMENT_STATE_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum["KajEnrollmentStatePending"] = "KAJ_ENROLLMENT_STATE_PENDING";
    GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum["KajEnrollmentStateComplete"] = "KAJ_ENROLLMENT_STATE_COMPLETE";
})(GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum || (GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum = {}));
export var GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
(function (GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum) {
    GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum["PartnerUnspecified"] = "PARTNER_UNSPECIFIED";
    GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum["LocalControlsByS3Ns"] = "LOCAL_CONTROLS_BY_S3NS";
})(GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum || (GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum = {}));
// GoogleCloudAssuredworkloadsV1Workload
/**
 * An Workload object for managing highly regulated workloads of cloud customers.
**/
var GoogleCloudAssuredworkloadsV1Workload = /** @class */ (function (_super) {
    __extends(GoogleCloudAssuredworkloadsV1Workload, _super);
    function GoogleCloudAssuredworkloadsV1Workload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=billingAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "billingAccount", void 0);
    __decorate([
        Metadata({ data: "json, name=complianceRegime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "complianceRegime", void 0);
    __decorate([
        Metadata({ data: "json, name=compliantButDisallowedServices" }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "compliantButDisallowedServices", void 0);
    __decorate([
        Metadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "createTime", void 0);
    __decorate([
        Metadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "displayName", void 0);
    __decorate([
        Metadata({ data: "json, name=enableSovereignControls" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "enableSovereignControls", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=kajEnrollmentState" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "kajEnrollmentState", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsSettings" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1WorkloadKmsSettings)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "kmsSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "labels", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=partner" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "partner", void 0);
    __decorate([
        Metadata({ data: "json, name=provisionedResourcesParent" }),
        __metadata("design:type", String)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "provisionedResourcesParent", void 0);
    __decorate([
        Metadata({ data: "json, name=resourceSettings", elemType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "resourceSettings", void 0);
    __decorate([
        Metadata({ data: "json, name=resources", elemType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceInfo }),
        __metadata("design:type", Array)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "resources", void 0);
    __decorate([
        Metadata({ data: "json, name=saaEnrollmentResponse" }),
        __metadata("design:type", GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse)
    ], GoogleCloudAssuredworkloadsV1Workload.prototype, "saaEnrollmentResponse", void 0);
    return GoogleCloudAssuredworkloadsV1Workload;
}(SpeakeasyBase));
export { GoogleCloudAssuredworkloadsV1Workload };
