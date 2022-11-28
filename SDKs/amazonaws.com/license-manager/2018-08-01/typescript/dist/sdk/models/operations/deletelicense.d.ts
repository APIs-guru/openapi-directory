import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLicenseXAmzTargetEnum {
    AwsLicenseManagerDeleteLicense = "AWSLicenseManager.DeleteLicense"
}
export declare class DeleteLicenseHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLicenseXAmzTargetEnum;
}
export declare class DeleteLicenseRequest extends SpeakeasyBase {
    headers: DeleteLicenseHeaders;
    request: shared.DeleteLicenseRequest;
}
export declare class DeleteLicenseResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    conflictException?: any;
    contentType: string;
    deleteLicenseResponse?: shared.DeleteLicenseResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    redirectException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
