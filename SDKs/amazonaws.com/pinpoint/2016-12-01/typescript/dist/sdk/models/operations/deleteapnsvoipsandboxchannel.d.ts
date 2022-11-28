import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApnsVoipSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteApnsVoipSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApnsVoipSandboxChannelRequest extends SpeakeasyBase {
    pathParams: DeleteApnsVoipSandboxChannelPathParams;
    headers: DeleteApnsVoipSandboxChannelHeaders;
}
export declare class DeleteApnsVoipSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteApnsVoipSandboxChannelResponse?: shared.DeleteApnsVoipSandboxChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
