import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendMessagesPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class SendMessagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration and other settings for a message.
**/
export declare class SendMessagesRequestBodyMessageRequest extends SpeakeasyBase {
    addresses?: Map<string, shared.AddressConfiguration>;
    context?: Map<string, string>;
    endpoints?: Map<string, shared.EndpointSendConfiguration>;
    messageConfiguration?: shared.DirectMessageConfiguration;
    templateConfiguration?: shared.TemplateConfiguration;
    traceId?: string;
}
export declare class SendMessagesRequestBody extends SpeakeasyBase {
    messageRequest: SendMessagesRequestBodyMessageRequest;
}
export declare class SendMessagesRequest extends SpeakeasyBase {
    pathParams: SendMessagesPathParams;
    headers: SendMessagesHeaders;
    request: SendMessagesRequestBody;
}
export declare class SendMessagesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    sendMessagesResponse?: shared.SendMessagesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
