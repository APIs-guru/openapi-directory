import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRejectDataShareActionEnum {
    RejectDataShare = "RejectDataShare"
}
export declare enum PostRejectDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRejectDataShareQueryParams extends SpeakeasyBase {
    action: PostRejectDataShareActionEnum;
    version: PostRejectDataShareVersionEnum;
}
export declare class PostRejectDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRejectDataShareRequest extends SpeakeasyBase {
    queryParams: PostRejectDataShareQueryParams;
    headers: PostRejectDataShareHeaders;
    request?: Uint8Array;
}
export declare class PostRejectDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
