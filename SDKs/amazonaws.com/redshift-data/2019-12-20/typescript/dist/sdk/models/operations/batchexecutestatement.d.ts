import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum BatchExecuteStatementXAmzTargetEnum {
    RedshiftDataBatchExecuteStatement = "RedshiftData.BatchExecuteStatement"
}
export declare class BatchExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchExecuteStatementXAmzTargetEnum;
}
export declare class BatchExecuteStatementRequest extends SpeakeasyBase {
    headers: BatchExecuteStatementHeaders;
    request: shared.BatchExecuteStatementInput;
}
export declare class BatchExecuteStatementResponse extends SpeakeasyBase {
    activeStatementsExceededException?: any;
    batchExecuteStatementException?: any;
    batchExecuteStatementOutput?: shared.BatchExecuteStatementOutput;
    contentType: string;
    statusCode: number;
    validationException?: any;
}
