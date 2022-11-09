import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Activity } from "./activity";


// ListActivitiesResponse
/** 
 * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
**/
export class ListActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.Activity })
  activities?: Activity[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
