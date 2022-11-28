import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UndeprecateWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateWorkflowType = "SimpleWorkflowService.UndeprecateWorkflowType"
}
export declare class UndeprecateWorkflowTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateWorkflowTypeXAmzTargetEnum;
}
export declare class UndeprecateWorkflowTypeRequest extends SpeakeasyBase {
    headers: UndeprecateWorkflowTypeHeaders;
    request: shared.UndeprecateWorkflowTypeInput;
}
export declare class UndeprecateWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeAlreadyExistsFault?: any;
    unknownResourceFault?: any;
}
