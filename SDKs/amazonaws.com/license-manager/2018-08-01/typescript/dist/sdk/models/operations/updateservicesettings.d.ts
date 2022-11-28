import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateServiceSettingsXAmzTargetEnum {
    AwsLicenseManagerUpdateServiceSettings = "AWSLicenseManager.UpdateServiceSettings"
}
export declare class UpdateServiceSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceSettingsXAmzTargetEnum;
}
export declare class UpdateServiceSettingsRequest extends SpeakeasyBase {
    headers: UpdateServiceSettingsHeaders;
    request: shared.UpdateServiceSettingsRequest;
}
export declare class UpdateServiceSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    updateServiceSettingsResponse?: Map<string, any>;
}
