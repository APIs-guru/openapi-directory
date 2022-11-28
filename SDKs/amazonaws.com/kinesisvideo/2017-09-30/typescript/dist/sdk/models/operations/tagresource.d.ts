import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    resourceArn: string;
    tags: shared.Tag[];
}
export declare class TagResourceRequest extends SpeakeasyBase {
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceOutput?: Map<string, any>;
    tagsPerResourceExceededLimitException?: any;
}
