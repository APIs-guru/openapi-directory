import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED"
,    AllowAllGcpResources = "ALLOW_ALL_GCP_RESOURCES"
,    AllowCompliantResources = "ALLOW_COMPLIANT_RESOURCES"
}


// GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest
/** 
 * Request for restricting list of available resources in Workload environment.
**/
export class GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=restrictionType" })
  restrictionType?: GoogleCloudAssuredworkloadsV1beta1RestrictAllowedResourcesRequestRestrictionTypeEnum;
}
