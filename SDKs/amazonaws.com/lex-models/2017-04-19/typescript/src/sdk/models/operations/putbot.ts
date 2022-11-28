import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutBotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutBotHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutBotRequestBodyAbortStatement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class PutBotRequestBodyAbortStatement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}


// PutBotRequestBodyClarificationPrompt
/** 
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export class PutBotRequestBodyClarificationPrompt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @SpeakeasyMetadata({ data: "json, name=responseCard" })
  responseCard?: string;
}

export enum PutBotRequestBodyLocaleEnum {
    DeDe = "de-DE",
    EnAu = "en-AU",
    EnGb = "en-GB",
    EnIn = "en-IN",
    EnUs = "en-US",
    Es419 = "es-419",
    EsEs = "es-ES",
    EsUs = "es-US",
    FrFr = "fr-FR",
    FrCa = "fr-CA",
    ItIt = "it-IT",
    JaJp = "ja-JP",
    KoKr = "ko-KR"
}

export enum PutBotRequestBodyProcessBehaviorEnum {
    Save = "SAVE",
    Build = "BUILD"
}


export class PutBotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abortStatement" })
  abortStatement?: PutBotRequestBodyAbortStatement;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum?: string;

  @SpeakeasyMetadata({ data: "json, name=childDirected" })
  childDirected: boolean;

  @SpeakeasyMetadata({ data: "json, name=clarificationPrompt" })
  clarificationPrompt?: PutBotRequestBodyClarificationPrompt;

  @SpeakeasyMetadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableModelImprovements" })
  enableModelImprovements?: boolean;

  @SpeakeasyMetadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=intents", elemType: shared.Intent })
  intents?: shared.Intent[];

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale: PutBotRequestBodyLocaleEnum;

  @SpeakeasyMetadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @SpeakeasyMetadata({ data: "json, name=processBehavior" })
  processBehavior?: PutBotRequestBodyProcessBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @SpeakeasyMetadata({ data: "json, name=voiceId" })
  voiceId?: string;
}


export class PutBotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutBotPathParams;

  @SpeakeasyMetadata()
  headers: PutBotHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PutBotRequestBody;
}


export class PutBotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  preconditionFailedException?: any;

  @SpeakeasyMetadata()
  putBotResponse?: shared.PutBotResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
