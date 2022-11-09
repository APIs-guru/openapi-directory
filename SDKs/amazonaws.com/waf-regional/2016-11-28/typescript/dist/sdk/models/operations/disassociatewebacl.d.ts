import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DisassociateWebAclxAmzTargetEnum {
    AwswafRegional20161128DisassociateWebAcl = "AWSWAF_Regional_20161128.DisassociateWebACL"
}
export declare class DisassociateWebAclHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateWebAclxAmzTargetEnum;
}
export declare class DisassociateWebAclRequest extends SpeakeasyBase {
    headers: DisassociateWebAclHeaders;
    request: shared.DisassociateWebAclRequest;
}
export declare class DisassociateWebAclResponse extends SpeakeasyBase {
    contentType: string;
    disassociateWebAclResponse?: Map<string, any>;
    statusCode: number;
    wafInternalErrorException?: any;
    wafInvalidAccountException?: any;
    wafInvalidParameterException?: any;
    wafNonexistentItemException?: any;
}
