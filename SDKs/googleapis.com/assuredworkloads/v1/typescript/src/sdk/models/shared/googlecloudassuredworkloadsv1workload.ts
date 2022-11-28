import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";


export enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}

export enum GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum {
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

export enum GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS",
    SovereignControlsByTSystems = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
}


// GoogleCloudAssuredworkloadsV1Workload
/** 
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1Workload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStatus" })
  complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;

  @SpeakeasyMetadata({ data: "json, name=compliantButDisallowedServices" })
  compliantButDisallowedServices?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableSovereignControls" })
  enableSovereignControls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kajEnrollmentState" })
  kajEnrollmentState?: GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKmsSettings;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;

  @SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo })
  resources?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}


// GoogleCloudAssuredworkloadsV1WorkloadInput
/** 
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1WorkloadInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStatus" })
  complianceStatus?: GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableSovereignControls" })
  enableSovereignControls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKmsSettings;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;

  @SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];

  @SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
