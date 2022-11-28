import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetTracesQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class BatchGetTracesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetTracesRequestBody extends SpeakeasyBase {
    nextToken?: string;
    traceIds: string[];
}
export declare class BatchGetTracesRequest extends SpeakeasyBase {
    queryParams: BatchGetTracesQueryParams;
    headers: BatchGetTracesHeaders;
    request: BatchGetTracesRequestBody;
}
export declare class BatchGetTracesResponse extends SpeakeasyBase {
    batchGetTracesResult?: shared.BatchGetTracesResult;
    contentType: string;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
