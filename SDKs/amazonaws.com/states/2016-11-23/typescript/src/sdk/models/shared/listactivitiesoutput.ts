import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityListItem } from "./activitylistitem";



export class ListActivitiesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activities", elemType: ActivityListItem })
  activities: ActivityListItem[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
