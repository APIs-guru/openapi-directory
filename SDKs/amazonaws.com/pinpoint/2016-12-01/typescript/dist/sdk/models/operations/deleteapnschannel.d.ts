import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteApnsChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteApnsChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteApnsChannelRequest extends SpeakeasyBase {
    pathParams: DeleteApnsChannelPathParams;
    headers: DeleteApnsChannelHeaders;
}
export declare class DeleteApnsChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteApnsChannelResponse?: shared.DeleteApnsChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
