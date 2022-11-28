import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteLicenseManagerReportGeneratorXAmzTargetEnum {
    AwsLicenseManagerDeleteLicenseManagerReportGenerator = "AWSLicenseManager.DeleteLicenseManagerReportGenerator"
}
export declare class DeleteLicenseManagerReportGeneratorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLicenseManagerReportGeneratorXAmzTargetEnum;
}
export declare class DeleteLicenseManagerReportGeneratorRequest extends SpeakeasyBase {
    headers: DeleteLicenseManagerReportGeneratorHeaders;
    request: shared.DeleteLicenseManagerReportGeneratorRequest;
}
export declare class DeleteLicenseManagerReportGeneratorResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    deleteLicenseManagerReportGeneratorResponse?: Map<string, any>;
    invalidParameterValueException?: any;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
