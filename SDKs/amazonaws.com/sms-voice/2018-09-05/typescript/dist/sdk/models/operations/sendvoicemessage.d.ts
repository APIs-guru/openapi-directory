import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendVoiceMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * An object that contains a voice message and information about the recipient that you want to send it to.
**/
export declare class SendVoiceMessageRequestBodyContent extends SpeakeasyBase {
    callInstructionsMessage?: shared.CallInstructionsMessageType;
    plainTextMessage?: shared.PlainTextMessageType;
    ssmlMessage?: shared.SsmlMessageType;
}
export declare class SendVoiceMessageRequestBody extends SpeakeasyBase {
    callerId?: string;
    configurationSetName?: string;
    content?: SendVoiceMessageRequestBodyContent;
    destinationPhoneNumber?: string;
    originationPhoneNumber?: string;
}
export declare class SendVoiceMessageRequest extends SpeakeasyBase {
    headers: SendVoiceMessageHeaders;
    request: SendVoiceMessageRequestBody;
}
export declare class SendVoiceMessageResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    sendVoiceMessageResponse?: shared.SendVoiceMessageResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
