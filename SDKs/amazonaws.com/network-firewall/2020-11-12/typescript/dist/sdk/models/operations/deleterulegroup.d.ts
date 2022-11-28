import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112DeleteRuleGroup = "NetworkFirewall_20201112.DeleteRuleGroup"
}
export declare class DeleteRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRuleGroupXAmzTargetEnum;
}
export declare class DeleteRuleGroupRequest extends SpeakeasyBase {
    headers: DeleteRuleGroupHeaders;
    request: shared.DeleteRuleGroupRequest;
}
export declare class DeleteRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteRuleGroupResponse?: shared.DeleteRuleGroupResponse;
    internalServerError?: any;
    invalidOperationException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    unsupportedOperationException?: any;
}
