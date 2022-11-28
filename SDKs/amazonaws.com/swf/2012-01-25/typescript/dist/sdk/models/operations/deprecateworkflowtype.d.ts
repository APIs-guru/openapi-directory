import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeprecateWorkflowTypeXAmzTargetEnum {
    SimpleWorkflowServiceDeprecateWorkflowType = "SimpleWorkflowService.DeprecateWorkflowType"
}
export declare class DeprecateWorkflowTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateWorkflowTypeXAmzTargetEnum;
}
export declare class DeprecateWorkflowTypeRequest extends SpeakeasyBase {
    headers: DeprecateWorkflowTypeHeaders;
    request: shared.DeprecateWorkflowTypeInput;
}
export declare class DeprecateWorkflowTypeResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    typeDeprecatedFault?: any;
    unknownResourceFault?: any;
}
