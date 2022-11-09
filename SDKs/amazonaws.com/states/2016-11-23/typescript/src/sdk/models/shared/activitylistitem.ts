import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActivityListItem
/** 
 * Contains details about an activity.
**/
export class ActivityListItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityArn" })
  activityArn: string;

  @Metadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @Metadata({ data: "json, name=name" })
  name: string;
}
