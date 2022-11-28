import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSmsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteSmsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSmsChannelRequest extends SpeakeasyBase {
    pathParams: DeleteSmsChannelPathParams;
    headers: DeleteSmsChannelHeaders;
}
export declare class DeleteSmsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteSmsChannelResponse?: shared.DeleteSmsChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
