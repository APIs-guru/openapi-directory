import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetMobileDeviceAccessEffectXAmzTargetEnum {
    WorkMailServiceGetMobileDeviceAccessEffect = "WorkMailService.GetMobileDeviceAccessEffect"
}
export declare class GetMobileDeviceAccessEffectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMobileDeviceAccessEffectXAmzTargetEnum;
}
export declare class GetMobileDeviceAccessEffectRequest extends SpeakeasyBase {
    headers: GetMobileDeviceAccessEffectHeaders;
    request: shared.GetMobileDeviceAccessEffectRequest;
}
export declare class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
    contentType: string;
    getMobileDeviceAccessEffectResponse?: shared.GetMobileDeviceAccessEffectResponse;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
