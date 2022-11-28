import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetExecutionHistoryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum GetExecutionHistoryXAmzTargetEnum {
    AwsStepFunctionsGetExecutionHistory = "AWSStepFunctions.GetExecutionHistory"
}
export declare class GetExecutionHistoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetExecutionHistoryXAmzTargetEnum;
}
export declare class GetExecutionHistoryRequest extends SpeakeasyBase {
    queryParams: GetExecutionHistoryQueryParams;
    headers: GetExecutionHistoryHeaders;
    request: shared.GetExecutionHistoryInput;
}
export declare class GetExecutionHistoryResponse extends SpeakeasyBase {
    contentType: string;
    executionDoesNotExist?: any;
    getExecutionHistoryOutput?: shared.GetExecutionHistoryOutput;
    invalidArn?: any;
    invalidToken?: any;
    statusCode: number;
}
