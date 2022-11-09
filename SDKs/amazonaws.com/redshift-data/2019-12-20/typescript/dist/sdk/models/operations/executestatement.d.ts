import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ExecuteStatementXAmzTargetEnum {
    RedshiftDataExecuteStatement = "RedshiftData.ExecuteStatement"
}
export declare class ExecuteStatementHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExecuteStatementXAmzTargetEnum;
}
export declare class ExecuteStatementRequest extends SpeakeasyBase {
    headers: ExecuteStatementHeaders;
    request: shared.ExecuteStatementInput;
}
export declare class ExecuteStatementResponse extends SpeakeasyBase {
    activeStatementsExceededException?: any;
    contentType: string;
    executeStatementException?: any;
    executeStatementOutput?: shared.ExecuteStatementOutput;
    statusCode: number;
    validationException?: any;
}
