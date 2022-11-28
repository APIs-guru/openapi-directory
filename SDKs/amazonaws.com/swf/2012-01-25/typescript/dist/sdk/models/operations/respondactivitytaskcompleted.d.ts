import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RespondActivityTaskCompletedXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskCompleted = "SimpleWorkflowService.RespondActivityTaskCompleted"
}
export declare class RespondActivityTaskCompletedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskCompletedXAmzTargetEnum;
}
export declare class RespondActivityTaskCompletedRequest extends SpeakeasyBase {
    headers: RespondActivityTaskCompletedHeaders;
    request: shared.RespondActivityTaskCompletedInput;
}
export declare class RespondActivityTaskCompletedResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
