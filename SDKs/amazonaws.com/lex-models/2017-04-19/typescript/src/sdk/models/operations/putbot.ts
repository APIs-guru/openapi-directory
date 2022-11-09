import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutBotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class PutBotHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// PutBotRequestBodyAbortStatement
/** 
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey. 
**/
export class PutBotRequestBodyAbortStatement extends SpeakeasyBase {
  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: string;
}


// PutBotRequestBodyClarificationPrompt
/** 
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export class PutBotRequestBodyClarificationPrompt extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxAttempts" })
  maxAttempts?: number;

  @Metadata({ data: "json, name=messages", elemType: shared.Message })
  messages?: shared.Message[];

  @Metadata({ data: "json, name=responseCard" })
  responseCard?: string;
}

export enum PutBotRequestBodyLocaleEnum {
    DeDe = "de-DE"
,    EnAu = "en-AU"
,    EnGb = "en-GB"
,    EnIn = "en-IN"
,    EnUs = "en-US"
,    Es419 = "es-419"
,    EsEs = "es-ES"
,    EsUs = "es-US"
,    FrFr = "fr-FR"
,    FrCa = "fr-CA"
,    ItIt = "it-IT"
,    JaJp = "ja-JP"
,    KoKr = "ko-KR"
}

export enum PutBotRequestBodyProcessBehaviorEnum {
    Save = "SAVE"
,    Build = "BUILD"
}


export class PutBotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=abortStatement" })
  abortStatement?: PutBotRequestBodyAbortStatement;

  @Metadata({ data: "json, name=checksum" })
  checksum?: string;

  @Metadata({ data: "json, name=childDirected" })
  childDirected: boolean;

  @Metadata({ data: "json, name=clarificationPrompt" })
  clarificationPrompt?: PutBotRequestBodyClarificationPrompt;

  @Metadata({ data: "json, name=createVersion" })
  createVersion?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=detectSentiment" })
  detectSentiment?: boolean;

  @Metadata({ data: "json, name=enableModelImprovements" })
  enableModelImprovements?: boolean;

  @Metadata({ data: "json, name=idleSessionTTLInSeconds" })
  idleSessionTtlInSeconds?: number;

  @Metadata({ data: "json, name=intents", elemType: shared.Intent })
  intents?: shared.Intent[];

  @Metadata({ data: "json, name=locale" })
  locale: PutBotRequestBodyLocaleEnum;

  @Metadata({ data: "json, name=nluIntentConfidenceThreshold" })
  nluIntentConfidenceThreshold?: number;

  @Metadata({ data: "json, name=processBehavior" })
  processBehavior?: PutBotRequestBodyProcessBehaviorEnum;

  @Metadata({ data: "json, name=tags", elemType: shared.Tag })
  tags?: shared.Tag[];

  @Metadata({ data: "json, name=voiceId" })
  voiceId?: string;
}


export class PutBotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutBotPathParams;

  @Metadata()
  headers: PutBotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: PutBotRequestBody;
}


export class PutBotResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  preconditionFailedException?: any;

  @Metadata()
  putBotResponse?: shared.PutBotResponse;

  @Metadata()
  statusCode: number;
}
