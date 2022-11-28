import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBaiduChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetBaiduChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetBaiduChannelRequest extends SpeakeasyBase {
    pathParams: GetBaiduChannelPathParams;
    headers: GetBaiduChannelHeaders;
}
export declare class GetBaiduChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getBaiduChannelResponse?: shared.GetBaiduChannelResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
