import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AuthorizeIpRulesXAmzTargetEnum {
    WorkspacesServiceAuthorizeIpRules = "WorkspacesService.AuthorizeIpRules"
}
export declare class AuthorizeIpRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AuthorizeIpRulesXAmzTargetEnum;
}
export declare class AuthorizeIpRulesRequest extends SpeakeasyBase {
    headers: AuthorizeIpRulesHeaders;
    request: shared.AuthorizeIpRulesRequest;
}
export declare class AuthorizeIpRulesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizeIpRulesResult?: Map<string, any>;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
