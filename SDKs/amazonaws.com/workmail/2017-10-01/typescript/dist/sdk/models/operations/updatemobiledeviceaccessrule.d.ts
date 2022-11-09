import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceUpdateMobileDeviceAccessRule = "WorkMailService.UpdateMobileDeviceAccessRule"
}
export declare class UpdateMobileDeviceAccessRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class UpdateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    headers: UpdateMobileDeviceAccessRuleHeaders;
    request: shared.UpdateMobileDeviceAccessRuleRequest;
}
export declare class UpdateMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    entityNotFoundException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
    updateMobileDeviceAccessRuleResponse?: Map<string, any>;
}
