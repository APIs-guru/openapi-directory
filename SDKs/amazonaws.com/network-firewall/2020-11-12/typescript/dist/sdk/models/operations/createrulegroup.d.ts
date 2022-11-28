import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateRuleGroupXAmzTargetEnum {
    NetworkFirewall20201112CreateRuleGroup = "NetworkFirewall_20201112.CreateRuleGroup"
}
export declare class CreateRuleGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRuleGroupXAmzTargetEnum;
}
export declare class CreateRuleGroupRequest extends SpeakeasyBase {
    headers: CreateRuleGroupHeaders;
    request: shared.CreateRuleGroupRequest;
}
export declare class CreateRuleGroupResponse extends SpeakeasyBase {
    contentType: string;
    createRuleGroupResponse?: shared.CreateRuleGroupResponse;
    insufficientCapacityException?: any;
    internalServerError?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
