import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListResourcesForWebAclxAmzTargetEnum {
    AwswafRegional20161128ListResourcesForWebAcl = "AWSWAF_Regional_20161128.ListResourcesForWebACL"
}
export declare class ListResourcesForWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesForWebAclxAmzTargetEnum;
}
export declare class ListResourcesForWebAclRequest extends SpeakeasyBase {
    headers: ListResourcesForWebAclHeaders;
    request: shared.ListResourcesForWebAclRequest;
}
export declare class ListResourcesForWebAclResponse extends SpeakeasyBase {
    contentType: string;
    listResourcesForWebAclResponse?: shared.ListResourcesForWebAclResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
