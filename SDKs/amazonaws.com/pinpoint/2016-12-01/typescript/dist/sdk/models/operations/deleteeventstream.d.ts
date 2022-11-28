import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteEventStreamPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class DeleteEventStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteEventStreamRequest extends SpeakeasyBase {
    pathParams: DeleteEventStreamPathParams;
    headers: DeleteEventStreamHeaders;
}
export declare class DeleteEventStreamResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteEventStreamResponse?: shared.DeleteEventStreamResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
