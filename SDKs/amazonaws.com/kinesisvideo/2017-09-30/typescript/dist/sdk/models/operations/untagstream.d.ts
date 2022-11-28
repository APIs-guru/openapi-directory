import { SpeakeasyBase } from "../../../internal/utils";
export declare class UntagStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UntagStreamRequestBody extends SpeakeasyBase {
    streamArn?: string;
    streamName?: string;
    tagKeyList: string[];
}
export declare class UntagStreamRequest extends SpeakeasyBase {
    headers: UntagStreamHeaders;
    request: UntagStreamRequestBody;
}
export declare class UntagStreamResponse extends SpeakeasyBase {
    clientLimitExceededException?: any;
    contentType: string;
    invalidArgumentException?: any;
    invalidResourceFormatException?: any;
    notAuthorizedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    untagStreamOutput?: Map<string, any>;
}
