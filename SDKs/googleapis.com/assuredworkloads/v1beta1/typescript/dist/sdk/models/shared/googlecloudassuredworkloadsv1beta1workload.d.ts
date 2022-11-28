import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings } from "./googlecloudassuredworkloadsv1beta1workloadcjissettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1beta1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedramphighsettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings } from "./googlecloudassuredworkloadsv1beta1workloadil4settings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1beta1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1beta1workloadresourceinfo";
export declare enum GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum {
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
export declare enum GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS",
    SovereignControlsByTSystems = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
}
export declare enum GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1WorkloadInput extends SpeakeasyBase {
    billingAccount?: string;
    cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings;
    complianceRegime?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;
    complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;
    displayName?: string;
    enableSovereignControls?: boolean;
    etag?: string;
    fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
    fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
    il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings;
    kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
    labels?: Map<string, string>;
    name?: string;
    partner?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;
    provisionedResourcesParent?: string;
    resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}
/**
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export declare class GoogleCloudAssuredworkloadsV1beta1Workload extends SpeakeasyBase {
    billingAccount?: string;
    cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings;
    complianceRegime?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;
    complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;
    compliantButDisallowedServices?: string[];
    createTime?: string;
    displayName?: string;
    enableSovereignControls?: boolean;
    etag?: string;
    fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;
    fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;
    il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings;
    kajEnrollmentState?: GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum;
    kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;
    labels?: Map<string, string>;
    name?: string;
    partner?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;
    provisionedResourcesParent?: string;
    resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];
    resources?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];
    saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}
