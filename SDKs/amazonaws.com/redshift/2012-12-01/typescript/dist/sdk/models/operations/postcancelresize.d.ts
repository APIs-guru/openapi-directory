import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCancelResizeActionEnum {
    CancelResize = "CancelResize"
}
export declare enum PostCancelResizeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCancelResizeQueryParams extends SpeakeasyBase {
    action: PostCancelResizeActionEnum;
    version: PostCancelResizeVersionEnum;
}
export declare class PostCancelResizeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCancelResizeRequest extends SpeakeasyBase {
    queryParams: PostCancelResizeQueryParams;
    headers: PostCancelResizeHeaders;
    request?: Uint8Array;
}
export declare class PostCancelResizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
