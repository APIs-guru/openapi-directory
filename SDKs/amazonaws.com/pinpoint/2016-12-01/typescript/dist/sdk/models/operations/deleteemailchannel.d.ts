import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEmailChannelPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteEmailChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEmailChannelRequest extends SpeakeasyBase {
    pathParams: DeleteEmailChannelPathParams;
    headers: DeleteEmailChannelHeaders;
}
export declare class DeleteEmailChannelResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEmailChannelResponse?: shared.DeleteEmailChannelResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
