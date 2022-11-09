import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityType } from "./activitytype";


export class UndeprecateActivityTypeInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @Metadata({ data: "json, name=domain" })
  domain: string;
}
