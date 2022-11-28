import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RespondActivityTaskFailedXAmzTargetEnum {
    SimpleWorkflowServiceRespondActivityTaskFailed = "SimpleWorkflowService.RespondActivityTaskFailed"
}
export declare class RespondActivityTaskFailedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RespondActivityTaskFailedXAmzTargetEnum;
}
export declare class RespondActivityTaskFailedRequest extends SpeakeasyBase {
    headers: RespondActivityTaskFailedHeaders;
    request: shared.RespondActivityTaskFailedInput;
}
export declare class RespondActivityTaskFailedResponse extends SpeakeasyBase {
    contentType: string;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
