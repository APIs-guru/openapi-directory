import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTagsXAmzTargetEnum {
    SageMakerListTags = "SageMaker.ListTags"
}
export declare class ListTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsRequest extends SpeakeasyBase {
    queryParams: ListTagsQueryParams;
    headers: ListTagsHeaders;
    request: shared.ListTagsInput;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    listTagsOutput?: shared.ListTagsOutput;
    statusCode: number;
}
