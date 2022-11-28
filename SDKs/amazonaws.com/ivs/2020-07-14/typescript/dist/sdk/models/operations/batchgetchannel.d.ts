import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchGetChannelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchGetChannelRequestBody extends SpeakeasyBase {
    arns: string[];
}
export declare class BatchGetChannelRequest extends SpeakeasyBase {
    headers: BatchGetChannelHeaders;
    request: BatchGetChannelRequestBody;
}
export declare class BatchGetChannelResponse extends SpeakeasyBase {
    batchGetChannelResponse?: shared.BatchGetChannelResponse;
    contentType: string;
    statusCode: number;
}
