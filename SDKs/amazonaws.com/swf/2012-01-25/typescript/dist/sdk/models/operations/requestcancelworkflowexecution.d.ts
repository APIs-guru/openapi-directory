import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RequestCancelWorkflowExecutionXAmzTargetEnum {
    SimpleWorkflowServiceRequestCancelWorkflowExecution = "SimpleWorkflowService.RequestCancelWorkflowExecution"
}
export declare class RequestCancelWorkflowExecutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RequestCancelWorkflowExecutionXAmzTargetEnum;
}
export declare class RequestCancelWorkflowExecutionRequest extends SpeakeasyBase {
    headers: RequestCancelWorkflowExecutionHeaders;
    request: shared.RequestCancelWorkflowExecutionInput;
}
export declare class RequestCancelWorkflowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
