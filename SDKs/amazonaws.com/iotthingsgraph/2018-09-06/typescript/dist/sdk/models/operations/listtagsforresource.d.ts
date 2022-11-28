import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourceQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTagsForResourceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceListTagsForResource = "IotThingsGraphFrontEndService.ListTagsForResource"
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
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    resourceAlreadyExistsException?: any;
    statusCode: number;
    throttlingException?: any;
}
