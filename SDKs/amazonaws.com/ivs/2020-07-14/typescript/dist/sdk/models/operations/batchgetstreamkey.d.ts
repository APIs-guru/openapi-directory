import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetStreamKeyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetStreamKeyRequestBody extends SpeakeasyBase {
    arns: string[];
}
export declare class BatchGetStreamKeyRequest extends SpeakeasyBase {
    headers: BatchGetStreamKeyHeaders;
    request: BatchGetStreamKeyRequestBody;
}
export declare class BatchGetStreamKeyResponse extends SpeakeasyBase {
    batchGetStreamKeyResponse?: shared.BatchGetStreamKeyResponse;
    contentType: string;
    statusCode: number;
}
