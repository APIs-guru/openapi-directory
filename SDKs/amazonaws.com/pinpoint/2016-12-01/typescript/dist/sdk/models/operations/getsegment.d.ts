import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class GetSegmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentRequest extends SpeakeasyBase {
    pathParams: GetSegmentPathParams;
    headers: GetSegmentHeaders;
}
export declare class GetSegmentResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentResponse?: shared.GetSegmentResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
