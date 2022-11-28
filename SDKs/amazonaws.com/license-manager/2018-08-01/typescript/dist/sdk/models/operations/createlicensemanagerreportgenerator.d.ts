import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLicenseManagerReportGeneratorXAmzTargetEnum {
    AwsLicenseManagerCreateLicenseManagerReportGenerator = "AWSLicenseManager.CreateLicenseManagerReportGenerator"
}
export declare class CreateLicenseManagerReportGeneratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class CreateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    headers: CreateLicenseManagerReportGeneratorHeaders;
    request: shared.CreateLicenseManagerReportGeneratorRequest;
}
export declare class CreateLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    createLicenseManagerReportGeneratorResponse?: shared.CreateLicenseManagerReportGeneratorResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
