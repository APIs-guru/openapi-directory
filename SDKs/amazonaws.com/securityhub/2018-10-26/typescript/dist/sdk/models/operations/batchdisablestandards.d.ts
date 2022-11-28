import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchDisableStandardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchDisableStandardsRequestBody extends SpeakeasyBase {
    standardsSubscriptionArns: string[];
}
export declare class BatchDisableStandardsRequest extends SpeakeasyBase {
    headers: BatchDisableStandardsHeaders;
    request: BatchDisableStandardsRequestBody;
}
export declare class BatchDisableStandardsResponse extends SpeakeasyBase {
    batchDisableStandardsResponse?: shared.BatchDisableStandardsResponse;
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
