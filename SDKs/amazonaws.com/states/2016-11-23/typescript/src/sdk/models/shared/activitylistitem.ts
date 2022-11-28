import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActivityListItem
/** 
 * Contains details about an activity.
**/
export class ActivityListItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityArn" })
  activityArn: string;

  @SpeakeasyMetadata({ data: "json, name=creationDate" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
