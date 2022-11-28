import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    SimpleWorkflowServiceUntagResource = "SimpleWorkflowService.UntagResource"
}
export declare class UntagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourceXAmzTargetEnum;
}
export declare class UntagResourceRequest extends SpeakeasyBase {
    headers: UntagResourceHeaders;
    request: shared.UntagResourceInput;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    limitExceededFault?: any;
    operationNotPermittedFault?: any;
    statusCode: number;
    unknownResourceFault?: any;
}
