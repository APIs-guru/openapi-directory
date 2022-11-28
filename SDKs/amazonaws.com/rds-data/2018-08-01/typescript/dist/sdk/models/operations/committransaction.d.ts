import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommitTransactionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CommitTransactionRequestBody extends SpeakeasyBase {
    resourceArn: string;
    secretArn: string;
    transactionId: string;
}
export declare class CommitTransactionRequest extends SpeakeasyBase {
    headers: CommitTransactionHeaders;
    request: CommitTransactionRequestBody;
}
export declare class CommitTransactionResponse extends SpeakeasyBase {
    badRequestException?: any;
    commitTransactionResponse?: shared.CommitTransactionResponse;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableError?: any;
    statementTimeoutException?: any;
    statusCode: number;
}
