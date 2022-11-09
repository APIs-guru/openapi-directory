import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActiveContext } from "./activecontext";
import { PredictedIntent } from "./predictedintent";
import { DialogStateEnum } from "./dialogstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { IntentConfidence } from "./intentconfidence";
import { ResponseCard } from "./responsecard";
import { SentimentResponse } from "./sentimentresponse";
export declare class PostTextResponse extends SpeakeasyBase {
    activeContexts?: ActiveContext[];
    alternativeIntents?: PredictedIntent[];
    botVersion?: string;
    dialogState?: DialogStateEnum;
    intentName?: string;
    message?: string;
    messageFormat?: MessageFormatTypeEnum;
    nluIntentConfidence?: IntentConfidence;
    responseCard?: ResponseCard;
    sentimentResponse?: SentimentResponse;
    sessionAttributes?: Map<string, string>;
    sessionId?: string;
    slotToElicit?: string;
    slots?: Map<string, string>;
}
