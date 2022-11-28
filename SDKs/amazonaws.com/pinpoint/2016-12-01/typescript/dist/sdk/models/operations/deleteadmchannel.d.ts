import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAdmChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteAdmChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteAdmChannelRequest extends SpeakeasyBase {
    pathParams: DeleteAdmChannelPathParams;
    headers: DeleteAdmChannelHeaders;
}
export declare class DeleteAdmChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteAdmChannelResponse?: shared.DeleteAdmChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
