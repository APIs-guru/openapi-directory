import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteBaiduChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteBaiduChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteBaiduChannelRequest extends SpeakeasyBase {
    pathParams: DeleteBaiduChannelPathParams;
    headers: DeleteBaiduChannelHeaders;
}
export declare class DeleteBaiduChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteBaiduChannelResponse?: shared.DeleteBaiduChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
