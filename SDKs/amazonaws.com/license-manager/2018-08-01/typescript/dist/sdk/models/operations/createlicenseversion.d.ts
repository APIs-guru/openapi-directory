import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLicenseVersionXAmzTargetEnum {
    AwsLicenseManagerCreateLicenseVersion = "AWSLicenseManager.CreateLicenseVersion"
}
export declare class CreateLicenseVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseVersionXAmzTargetEnum;
}
export declare class CreateLicenseVersionRequest extends SpeakeasyBase {
    headers: CreateLicenseVersionHeaders;
    request: shared.CreateLicenseVersionRequest;
}
export declare class CreateLicenseVersionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    conflictException?: any;
    contentType: string;
    createLicenseVersionResponse?: shared.CreateLicenseVersionResponse;
    rateLimitExceededException?: any;
    redirectException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
