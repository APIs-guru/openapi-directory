import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateDevicePolicyConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateDevicePolicyConfigurationRequestBody extends SpeakeasyBase {
    deviceCaCertificate?: string;
    fleetArn: string;
}
export declare class UpdateDevicePolicyConfigurationRequest extends SpeakeasyBase {
    headers: UpdateDevicePolicyConfigurationHeaders;
    request: UpdateDevicePolicyConfigurationRequestBody;
}
export declare class UpdateDevicePolicyConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    internalServerErrorException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
    updateDevicePolicyConfigurationResponse?: Map<string, any>;
}
