import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListDistributedGrantsXAmzTargetEnum {
    AwsLicenseManagerListDistributedGrants = "AWSLicenseManager.ListDistributedGrants"
}
export declare class ListDistributedGrantsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDistributedGrantsXAmzTargetEnum;
}
export declare class ListDistributedGrantsRequest extends SpeakeasyBase {
    headers: ListDistributedGrantsHeaders;
    request: shared.ListDistributedGrantsRequest;
}
export declare class ListDistributedGrantsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listDistributedGrantsResponse?: shared.ListDistributedGrantsResponse;
    rateLimitExceededException?: any;
    resourceLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
