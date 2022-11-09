import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSendMessageActionEnum {
    SendMessage = "SendMessage"
}
export declare enum PostSendMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostSendMessageQueryParams extends SpeakeasyBase {
    action: PostSendMessageActionEnum;
    version: PostSendMessageVersionEnum;
}
export declare class PostSendMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostSendMessageRequest extends SpeakeasyBase {
    queryParams: PostSendMessageQueryParams;
    headers: PostSendMessageHeaders;
    request?: Uint8Array;
}
export declare class PostSendMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
