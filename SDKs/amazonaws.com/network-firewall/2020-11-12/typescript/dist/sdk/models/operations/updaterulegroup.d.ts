import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112UpdateRuleGroup = "NetworkFirewall_20201112.UpdateRuleGroup"
}
export declare class UpdateRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRuleGroupXAmzTargetEnum;
}
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    headers: UpdateRuleGroupHeaders;
    request: shared.UpdateRuleGroupRequest;
}
export declare class UpdateRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateRuleGroupResponse?: shared.UpdateRuleGroupResponse;
}
