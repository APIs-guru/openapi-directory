import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RevokeIpRulesXAmzTargetEnum {
    WorkspacesServiceRevokeIpRules = "WorkspacesService.RevokeIpRules"
}
export declare class RevokeIpRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokeIpRulesXAmzTargetEnum;
}
export declare class RevokeIpRulesRequest extends SpeakeasyBase {
    headers: RevokeIpRulesHeaders;
    request: shared.RevokeIpRulesRequest;
}
export declare class RevokeIpRulesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    resourceNotFoundException?: any;
    revokeIpRulesResult?: Map<string, any>;
    statusCode: number;
}
