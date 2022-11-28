import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSegmentPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class DeleteSegmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSegmentRequest extends SpeakeasyBase {
    pathParams: DeleteSegmentPathParams;
    headers: DeleteSegmentHeaders;
}
export declare class DeleteSegmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteSegmentResponse?: shared.DeleteSegmentResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
