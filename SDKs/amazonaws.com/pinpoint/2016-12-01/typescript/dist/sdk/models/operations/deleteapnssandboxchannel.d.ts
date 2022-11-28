import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApnsSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteApnsSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApnsSandboxChannelRequest extends SpeakeasyBase {
    pathParams: DeleteApnsSandboxChannelPathParams;
    headers: DeleteApnsSandboxChannelHeaders;
}
export declare class DeleteApnsSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteApnsSandboxChannelResponse?: shared.DeleteApnsSandboxChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
