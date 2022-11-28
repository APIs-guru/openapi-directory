import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutTraceSegmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutTraceSegmentsRequestBody extends SpeakeasyBase {
    traceSegmentDocuments: string[];
}
export declare class PutTraceSegmentsRequest extends SpeakeasyBase {
    headers: PutTraceSegmentsHeaders;
    request: PutTraceSegmentsRequestBody;
}
export declare class PutTraceSegmentsResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    putTraceSegmentsResult?: shared.PutTraceSegmentsResult;
    statusCode: number;
    throttledException?: any;
}
