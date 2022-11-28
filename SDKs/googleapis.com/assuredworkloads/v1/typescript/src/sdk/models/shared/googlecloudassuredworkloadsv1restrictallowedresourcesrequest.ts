import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED",
    AllowAllGcpResources = "ALLOW_ALL_GCP_RESOURCES",
    AllowCompliantResources = "ALLOW_COMPLIANT_RESOURCES",
    AppendCompliantResources = "APPEND_COMPLIANT_RESOURCES"
}


// GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest
/** 
 * Request for restricting list of available resources in Workload environment.
**/
export class GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=restrictionType" })
  restrictionType?: GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum;
}
