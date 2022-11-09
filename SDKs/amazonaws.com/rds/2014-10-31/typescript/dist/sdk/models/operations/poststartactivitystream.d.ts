import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartActivityStreamActionEnum {
    StartActivityStream = "StartActivityStream"
}
export declare enum PostStartActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStartActivityStreamQueryParams extends SpeakeasyBase {
    action: PostStartActivityStreamActionEnum;
    version: PostStartActivityStreamVersionEnum;
}
export declare class PostStartActivityStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartActivityStreamRequest extends SpeakeasyBase {
    queryParams: PostStartActivityStreamQueryParams;
    headers: PostStartActivityStreamHeaders;
    request?: Uint8Array;
}
export declare class PostStartActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
