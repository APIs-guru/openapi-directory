import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateWebAclxAmzTargetEnum {
    AwswafRegional20161128UpdateWebAcl = "AWSWAF_Regional_20161128.UpdateWebACL"
}
export declare class UpdateWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWebAclxAmzTargetEnum;
}
export declare class UpdateWebAclRequest extends SpeakeasyBase {
    headers: UpdateWebAclHeaders;
    request: shared.UpdateWebAclRequest;
}
export declare class UpdateWebAclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateWebAclResponse?: shared.UpdateWebAclResponse;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidOperationException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafNonexistentContainerException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
    wafSubscriptionNotFoundException?: any;
}
