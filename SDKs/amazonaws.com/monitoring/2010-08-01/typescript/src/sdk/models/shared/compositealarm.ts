import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StateValueEnum } from "./statevalueenum";



// CompositeAlarm
/** 
 * The details about a composite alarm.
**/
export class CompositeAlarm extends SpeakeasyBase {
  @SpeakeasyMetadata()
  actionsEnabled?: boolean;

  @SpeakeasyMetadata()
  alarmActions?: string[];

  @SpeakeasyMetadata()
  alarmArn?: string;

  @SpeakeasyMetadata()
  alarmConfigurationUpdatedTimestamp?: Date;

  @SpeakeasyMetadata()
  alarmDescription?: string;

  @SpeakeasyMetadata()
  alarmName?: string;

  @SpeakeasyMetadata()
  alarmRule?: string;

  @SpeakeasyMetadata()
  insufficientDataActions?: string[];

  @SpeakeasyMetadata()
  okActions?: string[];

  @SpeakeasyMetadata()
  stateReason?: string;

  @SpeakeasyMetadata()
  stateReasonData?: string;

  @SpeakeasyMetadata()
  stateUpdatedTimestamp?: Date;

  @SpeakeasyMetadata()
  stateValue?: StateValueEnum;
}
