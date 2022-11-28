import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ExtendLicenseConsumptionXAmzTargetEnum {
    AwsLicenseManagerExtendLicenseConsumption = "AWSLicenseManager.ExtendLicenseConsumption"
}
export declare class ExtendLicenseConsumptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExtendLicenseConsumptionXAmzTargetEnum;
}
export declare class ExtendLicenseConsumptionRequest extends SpeakeasyBase {
    headers: ExtendLicenseConsumptionHeaders;
    request: shared.ExtendLicenseConsumptionRequest;
}
export declare class ExtendLicenseConsumptionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    extendLicenseConsumptionResponse?: shared.ExtendLicenseConsumptionResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
