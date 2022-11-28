import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetServiceSettingsXAmzTargetEnum {
    AwsLicenseManagerGetServiceSettings = "AWSLicenseManager.GetServiceSettings"
}
export declare class GetServiceSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceSettingsXAmzTargetEnum;
}
export declare class GetServiceSettingsRequest extends SpeakeasyBase {
    headers: GetServiceSettingsHeaders;
    request: Map<string, any>;
}
export declare class GetServiceSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getServiceSettingsResponse?: shared.GetServiceSettingsResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
