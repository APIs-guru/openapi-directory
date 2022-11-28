import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentImportJobsPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class GetSegmentImportJobsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetSegmentImportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentImportJobsRequest extends SpeakeasyBase {
    pathParams: GetSegmentImportJobsPathParams;
    queryParams: GetSegmentImportJobsQueryParams;
    headers: GetSegmentImportJobsHeaders;
}
export declare class GetSegmentImportJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentImportJobsResponse?: shared.GetSegmentImportJobsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
