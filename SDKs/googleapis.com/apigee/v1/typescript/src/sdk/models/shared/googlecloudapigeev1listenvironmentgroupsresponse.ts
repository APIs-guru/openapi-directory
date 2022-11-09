import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudApigeeV1EnvironmentGroup } from "./googlecloudapigeev1environmentgroup";


// GoogleCloudApigeeV1ListEnvironmentGroupsResponse
/** 
 * Response for ListEnvironmentGroups.
**/
export class GoogleCloudApigeeV1ListEnvironmentGroupsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentGroups", elemType: shared.GoogleCloudApigeeV1EnvironmentGroup })
  environmentGroups?: GoogleCloudApigeeV1EnvironmentGroup[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
