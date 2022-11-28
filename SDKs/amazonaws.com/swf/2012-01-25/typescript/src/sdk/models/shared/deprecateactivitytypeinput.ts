import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityType } from "./activitytype";



export class DeprecateActivityTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activityType" })
  activityType: ActivityType;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;
}
