import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EnvironmentGroup } from "./googlecloudapigeev1environmentgroup";
/**
 * Response for ListEnvironmentGroups.
**/
export declare class GoogleCloudApigeeV1ListEnvironmentGroupsResponse extends SpeakeasyBase {
    environmentGroups?: GoogleCloudApigeeV1EnvironmentGroup[];
    nextPageToken?: string;
}
