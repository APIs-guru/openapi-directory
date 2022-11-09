import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateRuleGroupXAmzTargetEnum {
    Awswaf20150824CreateRuleGroup = "AWSWAF_20150824.CreateRuleGroup"
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
    statusCode: number;
    wafBadRequestException?: any;
    wafDisallowedNameException?: any;
    wafInternalErrorException?: any;
    wafLimitsExceededException?: any;
    wafStaleDataException?: any;
    wafTagOperationException?: any;
    wafTagOperationInternalErrorException?: any;
}
