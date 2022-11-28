import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceDeleteMobileDeviceAccessRule = "WorkMailService.DeleteMobileDeviceAccessRule"
}
export declare class DeleteMobileDeviceAccessRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class DeleteMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    headers: DeleteMobileDeviceAccessRuleHeaders;
    request: shared.DeleteMobileDeviceAccessRuleRequest;
}
export declare class DeleteMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    deleteMobileDeviceAccessRuleResponse?: Map<string, any>;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
