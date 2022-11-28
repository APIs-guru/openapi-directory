import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResizeClusterActionEnum {
    ResizeCluster = "ResizeCluster"
}
export declare enum PostResizeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostResizeClusterQueryParams extends SpeakeasyBase {
    action: PostResizeClusterActionEnum;
    version: PostResizeClusterVersionEnum;
}
export declare class PostResizeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResizeClusterRequest extends SpeakeasyBase {
    queryParams: PostResizeClusterQueryParams;
    headers: PostResizeClusterHeaders;
    request?: Uint8Array;
}
export declare class PostResizeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
