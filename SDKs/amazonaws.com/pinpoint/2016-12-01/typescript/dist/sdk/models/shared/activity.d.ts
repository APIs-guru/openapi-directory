import { SpeakeasyBase } from "../../../internal/utils";
import { CustomMessageActivity } from "./custommessageactivity";
import { ConditionalSplitActivity } from "./conditionalsplitactivity";
import { EmailMessageActivity } from "./emailmessageactivity";
import { HoldoutActivity } from "./holdoutactivity";
import { MultiConditionalSplitActivity } from "./multiconditionalsplitactivity";
import { PushMessageActivity } from "./pushmessageactivity";
import { RandomSplitActivity } from "./randomsplitactivity";
import { SmsMessageActivity } from "./smsmessageactivity";
import { WaitActivity } from "./waitactivity";
/**
 * Specifies the configuration and other settings for an activity in a journey.
**/
export declare class Activity extends SpeakeasyBase {
    custom?: CustomMessageActivity;
    conditionalSplit?: ConditionalSplitActivity;
    description?: string;
    email?: EmailMessageActivity;
    holdout?: HoldoutActivity;
    multiCondition?: MultiConditionalSplitActivity;
    push?: PushMessageActivity;
    randomSplit?: RandomSplitActivity;
    sms?: SmsMessageActivity;
    wait?: WaitActivity;
}
