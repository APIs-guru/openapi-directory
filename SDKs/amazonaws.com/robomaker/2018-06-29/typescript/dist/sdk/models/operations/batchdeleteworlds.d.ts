import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDeleteWorldsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDeleteWorldsRequestBody extends SpeakeasyBase {
    worlds: string[];
}
export declare class BatchDeleteWorldsRequest extends SpeakeasyBase {
    headers: BatchDeleteWorldsHeaders;
    request: BatchDeleteWorldsRequestBody;
}
export declare class BatchDeleteWorldsResponse extends SpeakeasyBase {
    batchDeleteWorldsResponse?: shared.BatchDeleteWorldsResponse;
    contentType: string;
    internalServerException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttlingException?: any;
}
