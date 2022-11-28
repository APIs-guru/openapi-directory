import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScheduledActionStateEnum } from "./scheduledactionstateenum";
import { ScheduledActionType } from "./scheduledactiontype";



// ScheduledAction
/** 
 * Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
**/
export class ScheduledAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  endTime?: Date;

  @SpeakeasyMetadata()
  iamRole?: string;

  @SpeakeasyMetadata()
  nextInvocations?: Date[];

  @SpeakeasyMetadata()
  schedule?: string;

  @SpeakeasyMetadata()
  scheduledActionDescription?: string;

  @SpeakeasyMetadata()
  scheduledActionName?: string;

  @SpeakeasyMetadata()
  startTime?: Date;

  @SpeakeasyMetadata()
  state?: ScheduledActionStateEnum;

  @SpeakeasyMetadata()
  targetAction?: ScheduledActionType;
}
