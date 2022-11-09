import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDbProxyActionEnum {
    CreateDbProxy = "CreateDBProxy"
}
export declare enum PostCreateDbProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbProxyQueryParams extends SpeakeasyBase {
    action: PostCreateDbProxyActionEnum;
    version: PostCreateDbProxyVersionEnum;
}
export declare class PostCreateDbProxyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbProxyRequest extends SpeakeasyBase {
    queryParams: PostCreateDbProxyQueryParams;
    headers: PostCreateDbProxyHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
