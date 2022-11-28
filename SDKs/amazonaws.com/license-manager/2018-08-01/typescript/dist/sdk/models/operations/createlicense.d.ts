import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLicenseXAmzTargetEnum {
    AwsLicenseManagerCreateLicense = "AWSLicenseManager.CreateLicense"
}
export declare class CreateLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseXAmzTargetEnum;
}
export declare class CreateLicenseRequest extends SpeakeasyBase {
    headers: CreateLicenseHeaders;
    request: shared.CreateLicenseRequest;
}
export declare class CreateLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createLicenseResponse?: shared.CreateLicenseResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    redirectException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
