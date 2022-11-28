import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExportJobsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetExportJobsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetExportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetExportJobsRequest extends SpeakeasyBase {
    pathParams: GetExportJobsPathParams;
    queryParams: GetExportJobsQueryParams;
    headers: GetExportJobsHeaders;
}
export declare class GetExportJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getExportJobsResponse?: shared.GetExportJobsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
