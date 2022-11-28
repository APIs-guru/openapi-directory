import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApnsSandboxChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetApnsSandboxChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApnsSandboxChannelRequest extends SpeakeasyBase {
    pathParams: GetApnsSandboxChannelPathParams;
    headers: GetApnsSandboxChannelHeaders;
}
export declare class GetApnsSandboxChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getApnsSandboxChannelResponse?: shared.GetApnsSandboxChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
