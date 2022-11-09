import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAuthorizeDataShareActionEnum {
    AuthorizeDataShare = "AuthorizeDataShare"
}
export declare enum PostAuthorizeDataShareVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostAuthorizeDataShareQueryParams extends SpeakeasyBase {
    action: PostAuthorizeDataShareActionEnum;
    version: PostAuthorizeDataShareVersionEnum;
}
export declare class PostAuthorizeDataShareHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAuthorizeDataShareRequest extends SpeakeasyBase {
    queryParams: PostAuthorizeDataShareQueryParams;
    headers: PostAuthorizeDataShareHeaders;
    request?: Uint8Array;
}
export declare class PostAuthorizeDataShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
