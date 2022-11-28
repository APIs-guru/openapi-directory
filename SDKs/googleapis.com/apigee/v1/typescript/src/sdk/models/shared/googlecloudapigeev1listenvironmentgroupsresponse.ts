import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudApigeeV1EnvironmentGroup } from "./googlecloudapigeev1environmentgroup";



// GoogleCloudApigeeV1ListEnvironmentGroupsResponse
/** 
 * Response for ListEnvironmentGroups.
**/
export class GoogleCloudApigeeV1ListEnvironmentGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentGroups", elemType: GoogleCloudApigeeV1EnvironmentGroup })
  environmentGroups?: GoogleCloudApigeeV1EnvironmentGroup[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
