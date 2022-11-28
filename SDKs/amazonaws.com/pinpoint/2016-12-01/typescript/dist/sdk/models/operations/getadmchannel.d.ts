import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdmChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetAdmChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAdmChannelRequest extends SpeakeasyBase {
    pathParams: GetAdmChannelPathParams;
    headers: GetAdmChannelHeaders;
}
export declare class GetAdmChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getAdmChannelResponse?: shared.GetAdmChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
