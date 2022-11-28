import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListReceivedLicensesXAmzTargetEnum {
    AwsLicenseManagerListReceivedLicenses = "AWSLicenseManager.ListReceivedLicenses"
}
export declare class ListReceivedLicensesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReceivedLicensesXAmzTargetEnum;
}
export declare class ListReceivedLicensesRequest extends SpeakeasyBase {
    headers: ListReceivedLicensesHeaders;
    request: shared.ListReceivedLicensesRequest;
}
export declare class ListReceivedLicensesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listReceivedLicensesResponse?: shared.ListReceivedLicensesResponse;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
