import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourceQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare enum ListTagsForResourceXAmzTargetEnum {
    AwsOrganizationsV20161128ListTagsForResource = "AWSOrganizationsV20161128.ListTagsForResource"
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
    queryParams: ListTagsForResourceQueryParams;
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceRequest;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    awsOrganizationsNotInUseException?: any;
    accessDeniedException?: any;
    contentType: string;
    invalidInputException?: any;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    serviceException?: any;
    statusCode: number;
    targetNotFoundException?: any;
    tooManyRequestsException?: any;
}
