import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudAssuredworkloadsV1WorkloadKmsSettings } from "./googlecloudassuredworkloadsv1workloadkmssettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceSettings } from "./googlecloudassuredworkloadsv1workloadresourcesettings";
import { GoogleCloudAssuredworkloadsV1WorkloadResourceInfo } from "./googlecloudassuredworkloadsv1workloadresourceinfo";
import { GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse } from "./googlecloudassuredworkloadsv1workloadsaaenrollmentresponse";

export enum GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum {
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

export enum GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum {
    KajEnrollmentStateUnspecified = "KAJ_ENROLLMENT_STATE_UNSPECIFIED"
,    KajEnrollmentStatePending = "KAJ_ENROLLMENT_STATE_PENDING"
,    KajEnrollmentStateComplete = "KAJ_ENROLLMENT_STATE_COMPLETE"
}

export enum GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum {
    PartnerUnspecified = "PARTNER_UNSPECIFIED"
,    LocalControlsByS3Ns = "LOCAL_CONTROLS_BY_S3NS"
}


// GoogleCloudAssuredworkloadsV1Workload
/** 
 * An Workload object for managing highly regulated workloads of cloud customers.
**/
export class GoogleCloudAssuredworkloadsV1Workload extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAccount" })
  billingAccount?: string;

  @Metadata({ data: "json, name=complianceRegime" })
  complianceRegime?: GoogleCloudAssuredworkloadsV1WorkloadComplianceRegimeEnum;

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

  @Metadata({ data: "json, name=kajEnrollmentState" })
  kajEnrollmentState?: GoogleCloudAssuredworkloadsV1WorkloadKajEnrollmentStateEnum;

  @Metadata({ data: "json, name=kmsSettings" })
  kmsSettings?: GoogleCloudAssuredworkloadsV1WorkloadKmsSettings;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=partner" })
  partner?: GoogleCloudAssuredworkloadsV1WorkloadPartnerEnum;

  @Metadata({ data: "json, name=provisionedResourcesParent" })
  provisionedResourcesParent?: string;

  @Metadata({ data: "json, name=resourceSettings", elemType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceSettings })
  resourceSettings?: GoogleCloudAssuredworkloadsV1WorkloadResourceSettings[];

  @Metadata({ data: "json, name=resources", elemType: shared.GoogleCloudAssuredworkloadsV1WorkloadResourceInfo })
  resources?: GoogleCloudAssuredworkloadsV1WorkloadResourceInfo[];

  @Metadata({ data: "json, name=saaEnrollmentResponse" })
  saaEnrollmentResponse?: GoogleCloudAssuredworkloadsV1WorkloadSaaEnrollmentResponse;
}
