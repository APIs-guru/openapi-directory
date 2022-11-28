import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListAccessControlRulesXAmzTargetEnum {
    WorkMailServiceListAccessControlRules = "WorkMailService.ListAccessControlRules"
}
export declare class ListAccessControlRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListAccessControlRulesXAmzTargetEnum;
}
export declare class ListAccessControlRulesRequest extends SpeakeasyBase {
    headers: ListAccessControlRulesHeaders;
    request: shared.ListAccessControlRulesRequest;
}
export declare class ListAccessControlRulesResponse extends SpeakeasyBase {
    contentType: string;
    listAccessControlRulesResponse?: shared.ListAccessControlRulesResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
