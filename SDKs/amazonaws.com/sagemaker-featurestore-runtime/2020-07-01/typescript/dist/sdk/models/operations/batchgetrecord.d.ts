import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetRecordRequestBody extends SpeakeasyBase {
    identifiers: shared.BatchGetRecordIdentifier[];
}
export declare class BatchGetRecordRequest extends SpeakeasyBase {
    headers: BatchGetRecordHeaders;
    request: BatchGetRecordRequestBody;
}
export declare class BatchGetRecordResponse extends SpeakeasyBase {
    accessForbidden?: any;
    batchGetRecordResponse?: shared.BatchGetRecordResponse;
    contentType: string;
    internalFailure?: any;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
