import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum {
    Stopped = "STOPPED",
    Started = "STARTED"
}
/**
 * Configure Licensing.
**/
export declare class UpdateLaunchConfigurationRequestBodyLicensing extends SpeakeasyBase {
    osByol?: boolean;
}
export declare enum UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum {
    None = "NONE",
    Basic = "BASIC"
}
export declare class UpdateLaunchConfigurationRequestBody extends SpeakeasyBase {
    copyPrivateIp?: boolean;
    copyTags?: boolean;
    launchDisposition?: UpdateLaunchConfigurationRequestBodyLaunchDispositionEnum;
    licensing?: UpdateLaunchConfigurationRequestBodyLicensing;
    name?: string;
    sourceServerId: string;
    targetInstanceTypeRightSizingMethod?: UpdateLaunchConfigurationRequestBodyTargetInstanceTypeRightSizingMethodEnum;
}
export declare class UpdateLaunchConfigurationRequest extends SpeakeasyBase {
    headers: UpdateLaunchConfigurationHeaders;
    request: UpdateLaunchConfigurationRequestBody;
}
export declare class UpdateLaunchConfigurationResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    launchConfiguration?: shared.LaunchConfiguration;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
