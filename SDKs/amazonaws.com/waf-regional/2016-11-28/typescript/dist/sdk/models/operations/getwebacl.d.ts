import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetWebAclxAmzTargetEnum {
    AwswafRegional20161128GetWebAcl = "AWSWAF_Regional_20161128.GetWebACL"
}
export declare class GetWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetWebAclxAmzTargetEnum;
}
export declare class GetWebAclRequest extends SpeakeasyBase {
    headers: GetWebAclHeaders;
    request: shared.GetWebAclRequest;
}
export declare class GetWebAclResponse extends SpeakeasyBase {
    contentType: string;
    getWebAclResponse?: shared.GetWebAclResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonexistentItemException?: any;
}
