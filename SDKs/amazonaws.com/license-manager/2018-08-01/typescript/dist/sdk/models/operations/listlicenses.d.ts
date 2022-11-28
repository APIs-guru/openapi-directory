import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListLicensesXAmzTargetEnum {
    AwsLicenseManagerListLicenses = "AWSLicenseManager.ListLicenses"
}
export declare class ListLicensesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLicensesXAmzTargetEnum;
}
export declare class ListLicensesRequest extends SpeakeasyBase {
    headers: ListLicensesHeaders;
    request: shared.ListLicensesRequest;
}
export declare class ListLicensesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listLicensesResponse?: shared.ListLicensesResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
