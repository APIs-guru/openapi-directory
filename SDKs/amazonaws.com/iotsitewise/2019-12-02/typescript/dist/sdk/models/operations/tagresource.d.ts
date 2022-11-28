import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagResourceQueryParams extends SpeakeasyBase {
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
export declare class TagResourceRequestBody extends SpeakeasyBase {
    tags: Map<string, string>;
}
export declare class TagResourceRequest extends SpeakeasyBase {
    queryParams: TagResourceQueryParams;
    headers: TagResourceHeaders;
    request: TagResourceRequestBody;
}
export declare class TagResourceResponse extends SpeakeasyBase {
    conflictingOperationException?: any;
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagResourceResponse?: Map<string, any>;
    throttlingException?: any;
    tooManyTagsException?: any;
    unauthorizedException?: any;
}
