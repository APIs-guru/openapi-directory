import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostReceiveMessageActionEnum {
    ReceiveMessage = "ReceiveMessage"
}
export declare enum PostReceiveMessageVersionEnum {
    TwoThousandAndTwelve1105 = "2012-11-05"
}
export declare class PostReceiveMessageQueryParams extends SpeakeasyBase {
    action: PostReceiveMessageActionEnum;
    version: PostReceiveMessageVersionEnum;
}
export declare class PostReceiveMessageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostReceiveMessageRequest extends SpeakeasyBase {
    queryParams: PostReceiveMessageQueryParams;
    headers: PostReceiveMessageHeaders;
    request?: Uint8Array;
}
export declare class PostReceiveMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
