import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWebAclxAmzTargetEnum {
    AwswafRegional20161128CreateWebAcl = "AWSWAF_Regional_20161128.CreateWebACL"
}
export declare class CreateWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWebAclxAmzTargetEnum;
}
export declare class CreateWebAclRequest extends SpeakeasyBase {
    headers: CreateWebAclHeaders;
    request: shared.CreateWebAclRequest;
}
export declare class CreateWebAclResponse extends SpeakeasyBase {
    contentType: string;
    createWebAclResponse?: shared.CreateWebAclResponse;
    statusCode: number;
    wafBadRequestException?: any;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
