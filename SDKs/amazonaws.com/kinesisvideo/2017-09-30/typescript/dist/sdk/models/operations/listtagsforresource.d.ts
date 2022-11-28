import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTagsForResourceRequestBody extends SpeakeasyBase {
    nextToken?: string;
    resourceArn: string;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: ListTagsForResourceRequestBody;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
