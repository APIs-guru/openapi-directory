import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityResponse } from "./activityresponse";



// ActivitiesResponse
/** 
 * Provides information about the activities that were performed by a campaign.
**/
export class ActivitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Item", elemType: ActivityResponse })
  item: ActivityResponse[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
