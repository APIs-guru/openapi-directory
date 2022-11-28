import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutBotPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PutBotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
**/
export declare class PutBotRequestBodyAbortStatement extends SpeakeasyBase {
    messages?: shared.Message[];
    responseCard?: string;
}
/**
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see <a>how-it-works</a>.
**/
export declare class PutBotRequestBodyClarificationPrompt extends SpeakeasyBase {
    maxAttempts?: number;
    messages?: shared.Message[];
    responseCard?: string;
}
export declare enum PutBotRequestBodyLocaleEnum {
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
export declare enum PutBotRequestBodyProcessBehaviorEnum {
    Save = "SAVE",
    Build = "BUILD"
}
export declare class PutBotRequestBody extends SpeakeasyBase {
    abortStatement?: PutBotRequestBodyAbortStatement;
    checksum?: string;
    childDirected: boolean;
    clarificationPrompt?: PutBotRequestBodyClarificationPrompt;
    createVersion?: boolean;
    description?: string;
    detectSentiment?: boolean;
    enableModelImprovements?: boolean;
    idleSessionTtlInSeconds?: number;
    intents?: shared.Intent[];
    locale: PutBotRequestBodyLocaleEnum;
    nluIntentConfidenceThreshold?: number;
    processBehavior?: PutBotRequestBodyProcessBehaviorEnum;
    tags?: shared.Tag[];
    voiceId?: string;
}
export declare class PutBotRequest extends SpeakeasyBase {
    pathParams: PutBotPathParams;
    headers: PutBotHeaders;
    request: PutBotRequestBody;
}
export declare class PutBotResponse extends SpeakeasyBase {
    badRequestException?: any;
    conflictException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    preconditionFailedException?: any;
    putBotResponse?: shared.PutBotResponse;
    statusCode: number;
}
