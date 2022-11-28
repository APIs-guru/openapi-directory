import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Activity } from "./activity";



// ListActivitiesResponse
/** 
 * The response from the list request. Contains a list of activities and a token to retrieve the next page of results.
**/
export class ListActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: Activity })
  activities?: Activity[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
