import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRulesOfIpGroupXAmzTargetEnum {
    WorkspacesServiceUpdateRulesOfIpGroup = "WorkspacesService.UpdateRulesOfIpGroup"
}
export declare class UpdateRulesOfIpGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRulesOfIpGroupXAmzTargetEnum;
}
export declare class UpdateRulesOfIpGroupRequest extends SpeakeasyBase {
    headers: UpdateRulesOfIpGroupHeaders;
    request: shared.UpdateRulesOfIpGroupRequest;
}
export declare class UpdateRulesOfIpGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateRulesOfIpGroupResult?: Map<string, any>;
}
