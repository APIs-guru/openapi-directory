import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceRegisterWorkflowType = "SimpleWorkflowService.RegisterWorkflowType"
}
export declare class RegisterWorkflowTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWorkflowTypeXAmzTargetEnum;
}
export declare class RegisterWorkflowTypeRequest extends SpeakeasyBase {
    headers: RegisterWorkflowTypeHeaders;
    request: shared.RegisterWorkflowTypeInput;
}
export declare class RegisterWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeAlreadyExistsFault?: any;
    unknownResourceFault?: any;
}
