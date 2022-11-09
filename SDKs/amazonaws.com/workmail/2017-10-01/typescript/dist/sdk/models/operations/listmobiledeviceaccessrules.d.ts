import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListMobileDeviceAccessRulesXAmzTargetEnum {
    WorkMailServiceListMobileDeviceAccessRules = "WorkMailService.ListMobileDeviceAccessRules"
}
export declare class ListMobileDeviceAccessRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListMobileDeviceAccessRulesXAmzTargetEnum;
}
export declare class ListMobileDeviceAccessRulesRequest extends SpeakeasyBase {
    headers: ListMobileDeviceAccessRulesHeaders;
    request: shared.ListMobileDeviceAccessRulesRequest;
}
export declare class ListMobileDeviceAccessRulesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterException?: any;
    listMobileDeviceAccessRulesResponse?: shared.ListMobileDeviceAccessRulesResponse;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
