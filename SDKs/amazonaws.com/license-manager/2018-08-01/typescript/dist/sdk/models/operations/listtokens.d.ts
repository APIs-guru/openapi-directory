import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTokensXAmzTargetEnum {
    AwsLicenseManagerListTokens = "AWSLicenseManager.ListTokens"
}
export declare class ListTokensHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTokensXAmzTargetEnum;
}
export declare class ListTokensRequest extends SpeakeasyBase {
    headers: ListTokensHeaders;
    request: shared.ListTokensRequest;
}
export declare class ListTokensResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    listTokensResponse?: shared.ListTokensResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
    validationException?: any;
}
