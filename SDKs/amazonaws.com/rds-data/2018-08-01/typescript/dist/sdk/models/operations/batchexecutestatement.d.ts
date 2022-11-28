import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BatchExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class BatchExecuteStatementRequestBody extends SpeakeasyBase {
    database?: string;
    parameterSets?: shared.SqlParameter[][];
    resourceArn: string;
    schema?: string;
    secretArn: string;
    sql: string;
    transactionId?: string;
}
export declare class BatchExecuteStatementRequest extends SpeakeasyBase {
    headers: BatchExecuteStatementHeaders;
    request: BatchExecuteStatementRequestBody;
}
export declare class BatchExecuteStatementResponse extends SpeakeasyBase {
    badRequestException?: any;
    batchExecuteStatementResponse?: shared.BatchExecuteStatementResponse;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    serviceUnavailableError?: any;
    statementTimeoutException?: any;
    statusCode: number;
}
