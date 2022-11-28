import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TagStreamRequestBody extends SpeakeasyBase {
    streamArn?: string;
    streamName?: string;
    tags: Map<string, string>;
}
export declare class TagStreamRequest extends SpeakeasyBase {
    headers: TagStreamHeaders;
    request: TagStreamRequestBody;
}
export declare class TagStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidResourceFormatException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagStreamOutput?: Map<string, any>;
    tagsPerResourceExceededLimitException?: any;
}
