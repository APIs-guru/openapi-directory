import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SendUsersMessagesPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class SendUsersMessagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the configuration and other settings for a message to send to all the endpoints that are associated with a list of users.
**/
export declare class SendUsersMessagesRequestBodySendUsersMessageRequest extends SpeakeasyBase {
    context?: Map<string, string>;
    messageConfiguration?: shared.DirectMessageConfiguration;
    templateConfiguration?: shared.TemplateConfiguration;
    traceId?: string;
    users?: Map<string, shared.EndpointSendConfiguration>;
}
export declare class SendUsersMessagesRequestBody extends SpeakeasyBase {
    sendUsersMessageRequest: SendUsersMessagesRequestBodySendUsersMessageRequest;
}
export declare class SendUsersMessagesRequest extends SpeakeasyBase {
    pathParams: SendUsersMessagesPathParams;
    headers: SendUsersMessagesHeaders;
    request: SendUsersMessagesRequestBody;
}
export declare class SendUsersMessagesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    sendUsersMessagesResponse?: shared.SendUsersMessagesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
