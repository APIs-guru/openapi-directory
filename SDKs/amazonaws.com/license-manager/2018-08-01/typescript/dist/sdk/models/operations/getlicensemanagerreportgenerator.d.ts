import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetLicenseManagerReportGeneratorXAmzTargetEnum {
    AwsLicenseManagerGetLicenseManagerReportGenerator = "AWSLicenseManager.GetLicenseManagerReportGenerator"
}
export declare class GetLicenseManagerReportGeneratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class GetLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    headers: GetLicenseManagerReportGeneratorHeaders;
    request: shared.GetLicenseManagerReportGeneratorRequest;
}
export declare class GetLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    getLicenseManagerReportGeneratorResponse?: shared.GetLicenseManagerReportGeneratorResponse;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
