import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateBaiduChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class UpdateBaiduChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the status and settings of the Baidu (Baidu Cloud Push) channel for an application.
**/
export declare class UpdateBaiduChannelRequestBodyBaiduChannelRequest extends SpeakeasyBase {
    apiKey?: string;
    enabled?: boolean;
    secretKey?: string;
}
export declare class UpdateBaiduChannelRequestBody extends SpeakeasyBase {
    baiduChannelRequest: UpdateBaiduChannelRequestBodyBaiduChannelRequest;
}
export declare class UpdateBaiduChannelRequest extends SpeakeasyBase {
    pathParams: UpdateBaiduChannelPathParams;
    headers: UpdateBaiduChannelHeaders;
    request: UpdateBaiduChannelRequestBody;
}
export declare class UpdateBaiduChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    updateBaiduChannelResponse?: shared.UpdateBaiduChannelResponse;
}
