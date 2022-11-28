import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    AwsLicenseManagerListTagsForResource = "AWSLicenseManager.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceRequest;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    authorizationException?: any;
    contentType: string;
    invalidParameterValueException?: any;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    rateLimitExceededException?: any;
    serverInternalException?: any;
    statusCode: number;
}
