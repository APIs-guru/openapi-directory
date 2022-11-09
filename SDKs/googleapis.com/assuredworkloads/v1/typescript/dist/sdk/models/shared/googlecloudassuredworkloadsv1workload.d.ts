import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";
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
    AssuredWorkloadsForPartners = "ASSURED_WORKLOADS_FOR_PARTNERS"
}
export declare enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}
export declare enum GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS"
}
/**
 * An Workload object for managing highly regulated workloads of cloud customers.
**/
export declare class GoogleCloudAssuredworkloadsV1Workload extends SpeakeasyBase {
    billingAccount?: string;
    complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;
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
