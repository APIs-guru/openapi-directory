import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImportJobsPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetImportJobsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class GetImportJobsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetImportJobsRequest extends SpeakeasyBase {
    pathParams: GetImportJobsPathParams;
    queryParams: GetImportJobsQueryParams;
    headers: GetImportJobsHeaders;
}
export declare class GetImportJobsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    getImportJobsResponse?: shared.GetImportJobsResponse;
    internalServerErrorException?: any;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
