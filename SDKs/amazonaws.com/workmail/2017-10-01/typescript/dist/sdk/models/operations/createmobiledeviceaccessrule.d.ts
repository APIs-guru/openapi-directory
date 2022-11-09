import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateMobileDeviceAccessRuleXAmzTargetEnum {
    WorkMailServiceCreateMobileDeviceAccessRule = "WorkMailService.CreateMobileDeviceAccessRule"
}
export declare class CreateMobileDeviceAccessRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMobileDeviceAccessRuleXAmzTargetEnum;
}
export declare class CreateMobileDeviceAccessRuleRequest extends SpeakeasyBase {
    headers: CreateMobileDeviceAccessRuleHeaders;
    request: shared.CreateMobileDeviceAccessRuleRequest;
}
export declare class CreateMobileDeviceAccessRuleResponse extends SpeakeasyBase {
    contentType: string;
    createMobileDeviceAccessRuleResponse?: shared.CreateMobileDeviceAccessRuleResponse;
    invalidParameterException?: any;
    limitExceededException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
