import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum AssociateWebAclxAmzTargetEnum {
    AwswafRegional20161128AssociateWebAcl = "AWSWAF_Regional_20161128.AssociateWebACL"
}
export declare class AssociateWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateWebAclxAmzTargetEnum;
}
export declare class AssociateWebAclRequest extends SpeakeasyBase {
    headers: AssociateWebAclHeaders;
    request: shared.AssociateWebAclRequest;
}
export declare class AssociateWebAclResponse extends SpeakeasyBase {
    associateWebAclResponse?: Map<string, any>;
    contentType: string;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
    wafUnavailableEntityException?: any;
}
