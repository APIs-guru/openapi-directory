import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchEnableStandardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchEnableStandardsRequestBody extends SpeakeasyBase {
    standardsSubscriptionRequests: shared.StandardsSubscriptionRequest[];
}
export declare class BatchEnableStandardsRequest extends SpeakeasyBase {
    headers: BatchEnableStandardsHeaders;
    request: BatchEnableStandardsRequestBody;
}
export declare class BatchEnableStandardsResponse extends SpeakeasyBase {
    batchEnableStandardsResponse?: shared.BatchEnableStandardsResponse;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
