import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceRegisterActivityType = "SimpleWorkflowService.RegisterActivityType"
}
export declare class RegisterActivityTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterActivityTypeXAmzTargetEnum;
}
export declare class RegisterActivityTypeRequest extends SpeakeasyBase {
    headers: RegisterActivityTypeHeaders;
    request: shared.RegisterActivityTypeInput;
}
export declare class RegisterActivityTypeResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeAlreadyExistsFault?: any;
    unknownResourceFault?: any;
}
