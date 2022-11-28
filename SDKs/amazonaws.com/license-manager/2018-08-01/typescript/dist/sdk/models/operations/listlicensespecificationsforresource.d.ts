import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLicenseSpecificationsForResourceXAmzTargetEnum {
    AwsLicenseManagerListLicenseSpecificationsForResource = "AWSLicenseManager.ListLicenseSpecificationsForResource"
}
export declare class ListLicenseSpecificationsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseSpecificationsForResourceXAmzTargetEnum;
}
export declare class ListLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
    headers: ListLicenseSpecificationsForResourceHeaders;
    request: shared.ListLicenseSpecificationsForResourceRequest;
}
export declare class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listLicenseSpecificationsForResourceResponse?: shared.ListLicenseSpecificationsForResourceResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
