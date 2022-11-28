import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEmailChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateEmailChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the email channel for an application.
**/
export declare class UpdateEmailChannelRequestBodyEmailChannelRequest extends SpeakeasyBase {
    configurationSet?: string;
    enabled?: boolean;
    fromAddress?: string;
    identity?: string;
    roleArn?: string;
}
export declare class UpdateEmailChannelRequestBody extends SpeakeasyBase {
    emailChannelRequest: UpdateEmailChannelRequestBodyEmailChannelRequest;
}
export declare class UpdateEmailChannelRequest extends SpeakeasyBase {
    pathParams: UpdateEmailChannelPathParams;
    headers: UpdateEmailChannelHeaders;
    request: UpdateEmailChannelRequestBody;
}
export declare class UpdateEmailChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateEmailChannelResponse?: shared.UpdateEmailChannelResponse;
}
