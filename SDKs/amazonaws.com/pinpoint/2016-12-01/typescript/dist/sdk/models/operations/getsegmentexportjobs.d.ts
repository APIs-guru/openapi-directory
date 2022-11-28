import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSegmentExportJobsPathParams extends SpeakeasyBase {
    applicationId: string;
    segmentId: string;
}
export declare class GetSegmentExportJobsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetSegmentExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSegmentExportJobsRequest extends SpeakeasyBase {
    pathParams: GetSegmentExportJobsPathParams;
    queryParams: GetSegmentExportJobsQueryParams;
    headers: GetSegmentExportJobsHeaders;
}
export declare class GetSegmentExportJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getSegmentExportJobsResponse?: shared.GetSegmentExportJobsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
