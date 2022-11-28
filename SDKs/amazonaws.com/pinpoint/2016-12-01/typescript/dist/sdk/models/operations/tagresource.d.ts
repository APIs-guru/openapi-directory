import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagResourcePathParams extends SpeakeasyBase {
    resourceArn: string;
}
export declare class TagResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the tags (keys and values) for an application, campaign, message template, or segment.
**/
export declare class TagResourceRequestBodyTagsModel extends SpeakeasyBase {
    tags?: Map<string, string>;
}
export declare class TagResourceRequestBody extends SpeakeasyBase {
    tagsModel: TagResourceRequestBodyTagsModel;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    pathParams: TagResourcePathParams;
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
