import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RollbackTransactionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RollbackTransactionRequestBody extends SpeakeasyBase {
    resourceArn: string;
    secretArn: string;
    transactionId: string;
}
export declare class RollbackTransactionRequest extends SpeakeasyBase {
    headers: RollbackTransactionHeaders;
    request: RollbackTransactionRequestBody;
}
export declare class RollbackTransactionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    rollbackTransactionResponse?: shared.RollbackTransactionResponse;
    serviceUnavailableError?: any;
    statementTimeoutException?: any;
    statusCode: number;
}
