import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteWebAclxAmzTargetEnum {
    AwswafRegional20161128DeleteWebAcl = "AWSWAF_Regional_20161128.DeleteWebACL"
}
export declare class DeleteWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWebAclxAmzTargetEnum;
}
export declare class DeleteWebAclRequest extends SpeakeasyBase {
    headers: DeleteWebAclHeaders;
    request: shared.DeleteWebAclRequest;
}
export declare class DeleteWebAclResponse extends SpeakeasyBase {
    contentType: string;
    deleteWebAclResponse?: shared.DeleteWebAclResponse;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafNonEmptyEntityException?: any;
    wafNonexistentItemException?: any;
    wafReferencedItemException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
