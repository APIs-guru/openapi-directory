import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLicenseManagerReportGeneratorsXAmzTargetEnum {
    AwsLicenseManagerListLicenseManagerReportGenerators = "AWSLicenseManager.ListLicenseManagerReportGenerators"
}
export declare class ListLicenseManagerReportGeneratorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseManagerReportGeneratorsXAmzTargetEnum;
}
export declare class ListLicenseManagerReportGeneratorsRequest extends SpeakeasyBase {
    headers: ListLicenseManagerReportGeneratorsHeaders;
    request: shared.ListLicenseManagerReportGeneratorsRequest;
}
export declare class ListLicenseManagerReportGeneratorsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listLicenseManagerReportGeneratorsResponse?: shared.ListLicenseManagerReportGeneratorsResponse;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
