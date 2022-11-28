import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListReceivedGrantsXAmzTargetEnum {
    AwsLicenseManagerListReceivedGrants = "AWSLicenseManager.ListReceivedGrants"
}
export declare class ListReceivedGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListReceivedGrantsXAmzTargetEnum;
}
export declare class ListReceivedGrantsRequest extends SpeakeasyBase {
    headers: ListReceivedGrantsHeaders;
    request: shared.ListReceivedGrantsRequest;
}
export declare class ListReceivedGrantsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listReceivedGrantsResponse?: shared.ListReceivedGrantsResponse;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
