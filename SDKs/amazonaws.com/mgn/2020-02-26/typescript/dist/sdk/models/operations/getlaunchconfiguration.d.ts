import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLaunchConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLaunchConfigurationRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class GetLaunchConfigurationRequest extends SpeakeasyBase {
    headers: GetLaunchConfigurationHeaders;
    request: GetLaunchConfigurationRequestBody;
}
export declare class GetLaunchConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    launchConfiguration?: shared.LaunchConfiguration;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
}
