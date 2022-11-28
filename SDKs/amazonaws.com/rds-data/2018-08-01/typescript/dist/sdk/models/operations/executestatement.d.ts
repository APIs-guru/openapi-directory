import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Options that control how the result set is returned.
**/
export declare class ExecuteStatementRequestBodyResultSetOptions extends SpeakeasyBase {
    decimalReturnType?: shared.DecimalReturnTypeEnum;
}
export declare class ExecuteStatementRequestBody extends SpeakeasyBase {
    continueAfterTimeout?: boolean;
    database?: string;
    includeResultMetadata?: boolean;
    parameters?: shared.SqlParameter[];
    resourceArn: string;
    resultSetOptions?: ExecuteStatementRequestBodyResultSetOptions;
    schema?: string;
    secretArn: string;
    sql: string;
    transactionId?: string;
}
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    headers: ExecuteStatementHeaders;
    request: ExecuteStatementRequestBody;
}
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    executeStatementResponse?: shared.ExecuteStatementResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    serviceUnavailableError?: any;
    statementTimeoutException?: any;
    statusCode: number;
}
