import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=CUSTOM" })
  custom?: CustomMessageActivity;

  @Metadata({ data: "json, name=ConditionalSplit" })
  conditionalSplit?: ConditionalSplitActivity;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=EMAIL" })
  email?: EmailMessageActivity;

  @Metadata({ data: "json, name=Holdout" })
  holdout?: HoldoutActivity;

  @Metadata({ data: "json, name=MultiCondition" })
  multiCondition?: MultiConditionalSplitActivity;

  @Metadata({ data: "json, name=PUSH" })
  push?: PushMessageActivity;

  @Metadata({ data: "json, name=RandomSplit" })
  randomSplit?: RandomSplitActivity;

  @Metadata({ data: "json, name=SMS" })
  sms?: SmsMessageActivity;

  @Metadata({ data: "json, name=Wait" })
  wait?: WaitActivity;
}
