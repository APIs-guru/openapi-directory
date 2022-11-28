import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeprecateActivityTypeXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateActivityType = "SimpleWorkflowService.DeprecateActivityType"
}
export declare class DeprecateActivityTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateActivityTypeXAmzTargetEnum;
}
export declare class DeprecateActivityTypeRequest extends SpeakeasyBase {
    headers: DeprecateActivityTypeHeaders;
    request: shared.DeprecateActivityTypeInput;
}
export declare class DeprecateActivityTypeResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeDeprecatedFault?: any;
    unknownResourceFault?: any;
}
