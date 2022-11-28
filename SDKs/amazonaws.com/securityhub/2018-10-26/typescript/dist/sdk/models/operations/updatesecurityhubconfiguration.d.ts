import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateSecurityHubConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSecurityHubConfigurationRequestBody extends SpeakeasyBase {
    autoEnableControls?: boolean;
}
export declare class UpdateSecurityHubConfigurationRequest extends SpeakeasyBase {
    headers: UpdateSecurityHubConfigurationHeaders;
    request: UpdateSecurityHubConfigurationRequestBody;
}
export declare class UpdateSecurityHubConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateSecurityHubConfigurationResponse?: Map<string, any>;
}
