import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomMessageActivity } from "./custommessageactivity";
import { ConditionalSplitActivity } from "./conditionalsplitactivity";
import { EmailMessageActivity } from "./emailmessageactivity";
import { HoldoutActivity } from "./holdoutactivity";
import { MultiConditionalSplitActivity } from "./multiconditionalsplitactivity";
import { PushMessageActivity } from "./pushmessageactivity";
import { RandomSplitActivity } from "./randomsplitactivity";
import { SmsMessageActivity } from "./smsmessageactivity";
import { WaitActivity } from "./waitactivity";



// Activity
/** 
 * Specifies the configuration and other settings for an activity in a journey.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CUSTOM" })
  custom?: CustomMessageActivity;

  @SpeakeasyMetadata({ data: "json, name=ConditionalSplit" })
  conditionalSplit?: ConditionalSplitActivity;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=EMAIL" })
  email?: EmailMessageActivity;

  @SpeakeasyMetadata({ data: "json, name=Holdout" })
  holdout?: HoldoutActivity;

  @SpeakeasyMetadata({ data: "json, name=MultiCondition" })
  multiCondition?: MultiConditionalSplitActivity;

  @SpeakeasyMetadata({ data: "json, name=PUSH" })
  push?: PushMessageActivity;

  @SpeakeasyMetadata({ data: "json, name=RandomSplit" })
  randomSplit?: RandomSplitActivity;

  @SpeakeasyMetadata({ data: "json, name=SMS" })
  sms?: SmsMessageActivity;

  @SpeakeasyMetadata({ data: "json, name=Wait" })
  wait?: WaitActivity;
}
