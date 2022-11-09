import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActivityListItem } from "./activitylistitem";


export class ListActivitiesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activities", elemType: shared.ActivityListItem })
  activities: ActivityListItem[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
