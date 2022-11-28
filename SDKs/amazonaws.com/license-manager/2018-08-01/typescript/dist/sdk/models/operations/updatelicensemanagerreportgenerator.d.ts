import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateLicenseManagerReportGeneratorXAmzTargetEnum {
    AwsLicenseManagerUpdateLicenseManagerReportGenerator = "AWSLicenseManager.UpdateLicenseManagerReportGenerator"
}
export declare class UpdateLicenseManagerReportGeneratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class UpdateLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    headers: UpdateLicenseManagerReportGeneratorHeaders;
    request: shared.UpdateLicenseManagerReportGeneratorRequest;
}
export declare class UpdateLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    updateLicenseManagerReportGeneratorResponse?: Map<string, any>;
    validationException?: any;
}
