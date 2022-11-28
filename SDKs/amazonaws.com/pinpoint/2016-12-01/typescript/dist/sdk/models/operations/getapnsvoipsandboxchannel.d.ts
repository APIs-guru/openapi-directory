import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApnsVoipSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApnsVoipSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApnsVoipSandboxChannelRequest extends SpeakeasyBase {
    pathParams: GetApnsVoipSandboxChannelPathParams;
    headers: GetApnsVoipSandboxChannelHeaders;
}
export declare class GetApnsVoipSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getApnsVoipSandboxChannelResponse?: shared.GetApnsVoipSandboxChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
