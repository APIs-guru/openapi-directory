import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckInLicenseXAmzTargetEnum {
    AwsLicenseManagerCheckInLicense = "AWSLicenseManager.CheckInLicense"
}
export declare class CheckInLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckInLicenseXAmzTargetEnum;
}
export declare class CheckInLicenseRequest extends SpeakeasyBase {
    headers: CheckInLicenseHeaders;
    request: shared.CheckInLicenseRequest;
}
export declare class CheckInLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    checkInLicenseResponse?: Map<string, any>;
    conflictException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
