import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RespondActivityTaskCanceledXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskCanceled = "SimpleWorkflowService.RespondActivityTaskCanceled"
}
export declare class RespondActivityTaskCanceledHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskCanceledXAmzTargetEnum;
}
export declare class RespondActivityTaskCanceledRequest extends SpeakeasyBase {
    headers: RespondActivityTaskCanceledHeaders;
    request: shared.RespondActivityTaskCanceledInput;
}
export declare class RespondActivityTaskCanceledResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
