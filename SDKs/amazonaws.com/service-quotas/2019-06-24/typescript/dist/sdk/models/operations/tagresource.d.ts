import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TagResourceXAmzTargetEnum {
    ServiceQuotasV20190624TagResource = "ServiceQuotasV20190624.TagResource"
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourceXAmzTargetEnum;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: shared.TagResourceRequest;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    illegalArgumentException?: any;
    noSuchResourceException?: any;
    serviceException?: any;
    statusCode: number;
    tagPolicyViolationException?: any;
    tagResourceResponse?: Map<string, any>;
    tooManyRequestsException?: any;
    tooManyTagsException?: any;
}
