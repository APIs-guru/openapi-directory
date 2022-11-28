import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLicenseVersionsXAmzTargetEnum {
    AwsLicenseManagerListLicenseVersions = "AWSLicenseManager.ListLicenseVersions"
}
export declare class ListLicenseVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicenseVersionsXAmzTargetEnum;
}
export declare class ListLicenseVersionsRequest extends SpeakeasyBase {
    headers: ListLicenseVersionsHeaders;
    request: shared.ListLicenseVersionsRequest;
}
export declare class ListLicenseVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listLicenseVersionsResponse?: shared.ListLicenseVersionsResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
