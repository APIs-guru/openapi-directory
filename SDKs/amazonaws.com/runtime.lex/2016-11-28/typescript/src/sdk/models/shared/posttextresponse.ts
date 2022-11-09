import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActiveContext } from "./activecontext";
import { PredictedIntent } from "./predictedintent";
import { DialogStateEnum } from "./dialogstateenum";
import { MessageFormatTypeEnum } from "./messageformattypeenum";
import { IntentConfidence } from "./intentconfidence";
import { ResponseCard } from "./responsecard";
import { SentimentResponse } from "./sentimentresponse";


export class PostTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=activeContexts", elemType: shared.ActiveContext })
  activeContexts?: ActiveContext[];

  @Metadata({ data: "json, name=alternativeIntents", elemType: shared.PredictedIntent })
  alternativeIntents?: PredictedIntent[];

  @Metadata({ data: "json, name=botVersion" })
  botVersion?: string;

  @Metadata({ data: "json, name=dialogState" })
  dialogState?: DialogStateEnum;

  @Metadata({ data: "json, name=intentName" })
  intentName?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=messageFormat" })
  messageFormat?: MessageFormatTypeEnum;

  @Metadata({ data: "json, name=nluIntentConfidence" })
  nluIntentConfidence?: IntentConfidence;

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: ResponseCard;

  @Metadata({ data: "json, name=sentimentResponse" })
  sentimentResponse?: SentimentResponse;

  @Metadata({ data: "json, name=sessionAttributes" })
  sessionAttributes?: Map<string, string>;

  @Metadata({ data: "json, name=sessionId" })
  sessionId?: string;

  @Metadata({ data: "json, name=slotToElicit" })
  slotToElicit?: string;

  @Metadata({ data: "json, name=slots" })
  slots?: Map<string, string>;
}
