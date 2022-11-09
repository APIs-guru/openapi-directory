import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetWebAclForResourceXAmzTargetEnum {
    AwswafRegional20161128GetWebAclForResource = "AWSWAF_Regional_20161128.GetWebACLForResource"
}
export declare class GetWebAclForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWebAclForResourceXAmzTargetEnum;
}
export declare class GetWebAclForResourceRequest extends SpeakeasyBase {
    headers: GetWebAclForResourceHeaders;
    request: shared.GetWebAclForResourceRequest;
}
export declare class GetWebAclForResourceResponse extends SpeakeasyBase {
    contentType: string;
    getWebAclForResourceResponse?: shared.GetWebAclForResourceResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
    wafUnavailableEntityException?: any;
}
