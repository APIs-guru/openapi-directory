import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGcmChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteGcmChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGcmChannelRequest extends SpeakeasyBase {
    pathParams: DeleteGcmChannelPathParams;
    headers: DeleteGcmChannelHeaders;
}
export declare class DeleteGcmChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteGcmChannelResponse?: shared.DeleteGcmChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
