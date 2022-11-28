import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UndeprecateActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceUndeprecateActivityType = "SimpleWorkflowService.UndeprecateActivityType"
}
export declare class UndeprecateActivityTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeprecateActivityTypeXAmzTargetEnum;
}
export declare class UndeprecateActivityTypeRequest extends SpeakeasyBase {
    headers: UndeprecateActivityTypeHeaders;
    request: shared.UndeprecateActivityTypeInput;
}
export declare class UndeprecateActivityTypeResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeAlreadyExistsFault?: any;
    unknownResourceFault?: any;
}
