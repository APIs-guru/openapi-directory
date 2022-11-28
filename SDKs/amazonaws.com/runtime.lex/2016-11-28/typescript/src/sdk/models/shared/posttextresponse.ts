import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActiveContext } from "./activecontext";
import { PredictedIntent } from "./predictedintent";
import { DialogStateEnum } from "./dialogstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { IntentConfidence } from "./intentconfidence";
import { ResponseCard } from "./responsecard";
import { SentimentResponse } from "./sentimentresponse";



export class PostTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=activeContexts", elemType: ActiveContext })
  activeContexts?: ActiveContext[];

  @SpeakeasyMetadata({ data: "json, name=alternativeIntents", elemType: PredictedIntent })
  alternativeIntents?: PredictedIntent[];

  @SpeakeasyMetadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=dialogState" })
  dialogState?: DialogStateEnum;

  @SpeakeasyMetadata({ data: "json, name=intentName" })
  intentName?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidence" })
  nluIntentConfidence?: IntentConfidence;

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: ResponseCard;

  @SpeakeasyMetadata({ data: "json, name=sentimentResponse" })
  sentimentResponse?: SentimentResponse;

  @SpeakeasyMetadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @SpeakeasyMetadata({ data: "json, name=slots" })
  slots?: Map<string, string>;
}
