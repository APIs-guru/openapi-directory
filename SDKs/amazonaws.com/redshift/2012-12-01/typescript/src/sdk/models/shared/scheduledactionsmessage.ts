import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledAction } from "./scheduledaction";



export class ScheduledActionsMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: ScheduledAction })
  scheduledActions?: ScheduledAction[];
}
