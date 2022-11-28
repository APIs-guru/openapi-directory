import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UntagResourceXAmzTargetEnum {
    OpsWorks20130218UntagResource = "OpsWorks_20130218.UntagResource"
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
    request: shared.UntagResourceRequest;
}
export declare class UntagResourceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
