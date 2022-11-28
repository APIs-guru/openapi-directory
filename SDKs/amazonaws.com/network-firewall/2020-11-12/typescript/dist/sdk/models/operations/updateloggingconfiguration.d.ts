import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLoggingConfigurationXAmzTargetEnum {
    NetworkFirewall20201112UpdateLoggingConfiguration = "NetworkFirewall_20201112.UpdateLoggingConfiguration"
}
export declare class UpdateLoggingConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLoggingConfigurationXAmzTargetEnum;
}
export declare class UpdateLoggingConfigurationRequest extends SpeakeasyBase {
    headers: UpdateLoggingConfigurationHeaders;
    request: shared.UpdateLoggingConfigurationRequest;
}
export declare class UpdateLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidRequestException?: any;
    invalidTokenException?: any;
    logDestinationPermissionException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateLoggingConfigurationResponse?: shared.UpdateLoggingConfigurationResponse;
}
