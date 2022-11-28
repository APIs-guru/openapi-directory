import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum {
    RestrictionTypeUnspecified = "RESTRICTION_TYPE_UNSPECIFIED",
    AllowAllGcpResources = "ALLOW_ALL_GCP_RESOURCES",
    AllowCompliantResources = "ALLOW_COMPLIANT_RESOURCES",
    AppendCompliantResources = "APPEND_COMPLIANT_RESOURCES"
}
/**
 * Request for restricting list of available resources in Workload environment.
**/
export declare class GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequest extends SpeakeasyBase {
    restrictionType?: GoogleCloudAssuredworkloadsV1RestrictAllowedResourcesRequestRestrictionTypeEnum;
}
