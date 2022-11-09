import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings } from "./googlecloudassuredworkloadsv1beta1workloadcjissettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus } from "./googlecloudassuredworkloadsv1beta1workloadcompliancestatus";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedramphighsettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings } from "./googlecloudassuredworkloadsv1beta1workloadfedrampmoderatesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings } from "./googlecloudassuredworkloadsv1beta1workloadil4settings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1beta1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1beta1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1beta1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1beta1workloadsaaenrollmentresponse";

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum {
    ComplianceRegimeUnspecified = "COMPLIANCE_REGIME_UNSPECIFIED"
,    Il4 = "IL4"
,    Cjis = "CJIS"
,    FedrampHigh = "FEDRAMP_HIGH"
,    FedrampModerate = "FEDRAMP_MODERATE"
,    UsRegionalAccess = "US_REGIONAL_ACCESS"
,    Hipaa = "HIPAA"
,    Hitrust = "HITRUST"
,    EuRegionsAndSupport = "EU_REGIONS_AND_SUPPORT"
,    CaRegionsAndSupport = "CA_REGIONS_AND_SUPPORT"
,    Itar = "ITAR"
,    AssuredWorkloadsForPartners = "ASSURED_WORKLOADS_FOR_PARTNERS"
}

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
,    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING"
,    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}

export enum GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED"
,    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS"
}


// GoogleCloudAssuredworkloadsV1beta1Workload
/** 
 * An Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1beta1Workload extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @Metadata({ data: "json, name=cjisSettings" })
  cjisSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadCjisSettings;

  @Metadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceRegimeEnum;

  @Metadata({ data: "json, name=complianceStatus" })
  complianceStatus?: GoogleCloudAssuredworkloadsV1beta1WorkloadComplianceStatus;

  @Metadata({ data: "json, name=compliantButDisallowedServices" })
  compliantButDisallowedServices?: string[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=enableSovereignControls" })
  enableSovereignControls?: boolean;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fedrampHighSettings" })
  fedrampHighSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampHighSettings;

  @Metadata({ data: "json, name=fedrampModerateSettings" })
  fedrampModerateSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadFedrampModerateSettings;

  @Metadata({ data: "json, name=il4Settings" })
  il4Settings?: GoogleCloudAssuredworkloadsV1beta1WorkloadIl4Settings;

  @Metadata({ data: "json, name=kajEnrollmentState" })
  kajEnrollmentState?: GoogleCloudAssuredworkloadsV1beta1WorkloadKajEnrollmentStateEnum;

  @Metadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadKmsSettings;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1beta1WorkloadPartnerEnum;

  @Metadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @Metadata({ data: "json, name=resourceSettings", elemType: shared.GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceSettings[];

  @Metadata({ data: "json, name=resources", elemType: shared.GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo })
  resources?: GoogleCloudAssuredworkloadsV1beta1WorkloadResourceInfo[];

  @Metadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1beta1WorkloadSaaEnrollmentResponse;
}
