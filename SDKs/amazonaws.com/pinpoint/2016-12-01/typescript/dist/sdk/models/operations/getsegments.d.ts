import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetSegmentsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetSegmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentsRequest extends SpeakeasyBase {
    pathParams: GetSegmentsPathParams;
    queryParams: GetSegmentsQueryParams;
    headers: GetSegmentsHeaders;
}
export declare class GetSegmentsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentsResponse?: shared.GetSegmentsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
