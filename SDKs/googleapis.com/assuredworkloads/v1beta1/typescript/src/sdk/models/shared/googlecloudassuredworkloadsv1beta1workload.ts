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


export enum GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum {
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

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED",
    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS",
    SovereignControlsByTSystems = "SOVEREIGN_CONTROLS_BY_T_SYSTEMS"
}

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED",
    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING",
    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}


// GoogleCloudAssuredworkloadsV1beta1WorkloadInput
/** 
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1beta1WorkloadInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=cjisSettings" })
  cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings;

  @SpeakeasyMetadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStatus" })
  complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=enableSovereignControls" })
  enableSovereignControls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fedrampHighSettings" })
  fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;

  @SpeakeasyMetadata({ data: "json, name=fedrampModerateSettings" })
  fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;

  @SpeakeasyMetadata({ data: "json, name=il4Settings" })
  il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings;

  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;

  @SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];

  @SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}


// GoogleCloudAssuredworkloadsV1beta1Workload
/** 
 * A Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1beta1Workload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=cjisSettings" })
  cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings;

  @SpeakeasyMetadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;

  @SpeakeasyMetadata({ data: "json, name=complianceStatus" })
  complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;

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

  @SpeakeasyMetadata({ data: "json, name=fedrampHighSettings" })
  fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;

  @SpeakeasyMetadata({ data: "json, name=fedrampModerateSettings" })
  fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;

  @SpeakeasyMetadata({ data: "json, name=il4Settings" })
  il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings;

  @SpeakeasyMetadata({ data: "json, name=kajEnrollmentState" })
  kajEnrollmentState?: GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;

  @SpeakeasyMetadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceSettings", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];

  @SpeakeasyMetadata({ data: "json, name=resources", elemType: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo })
  resources?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];

  @SpeakeasyMetadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}
