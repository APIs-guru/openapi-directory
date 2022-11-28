import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";
export declare enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}
export declare enum GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum {
    ComplianceRegimeUnspecified = "COMPLIANCE_REGIME_UNSPECIFIED",
    Il4 = "IL4",
    Cjis = "CJIS",
    FedrampHigh = "FEDRAMP_HIGH",
    FedrampModerate = "FEDRAMP_MODERATE",
    UsRegionalAccess = "US_REGIONAL_ACCESS",
    Hipaa = "HIPAA",
    Hitrust = "HITRUST",
    EuRegionsAndSupport = "EU_REGIONS_AND_SUPPORT",
    CaRegionsAndSupport = "CA_REGIONS_AND_SUPPORT",
    Itar = "ITAR",
    AuRegionsAndUsSupport = "AU_REGIONS_AND_US_SUPPORT",
    AssuredWorkloadsForPartners = "ASSURED_WORKLOADS_FOR_PARTNERS",
    IsrRegions = "ISR_REGIONS"
}
export declare enum GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS",
    SovereignControlsByTSystems = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export declare class GoogleCloudAssuredworkloadsV1Workload extends SpeakeasyBase {
    billingAccount?: string;
    complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
    complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
    compliantButDisallowedServices?: string[];
    createTime?: string;
    displayName?: string;
    enableSovereignControls?: boolean;
    etag?: string;
    kajEnrollmentState?: GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum;
    kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKmsSettings;
    labels?: Map<string, string>;
    name?: string;
    partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
    provisionedResourcesParent?: string;
    resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];
    resources?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export declare class GoogleCloudAssuredworkloadsV1WorkloadInput extends SpeakeasyBase {
    billingAccount?: string;
    complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
    complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;
    displayName?: string;
    enableSovereignControls?: boolean;
    etag?: string;
    kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKmsSettings;
    labels?: Map<string, string>;
    name?: string;
    partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;
    provisionedResourcesParent?: string;
    resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
