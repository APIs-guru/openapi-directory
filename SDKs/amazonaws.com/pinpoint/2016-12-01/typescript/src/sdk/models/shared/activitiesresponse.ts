import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityResponse } from "./activityresponse";


// ActivitiesResponse
/** 
 * Provides information about the activities that were performed by a campaign.
**/
export class ActivitiesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Item", elemType: shared.ActivityResponse })
  item: ActivityResponse[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
