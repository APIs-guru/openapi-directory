import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteClusterActionEnum {
    DeleteCluster = "DeleteCluster"
}
export declare enum PostDeleteClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteClusterQueryParams extends SpeakeasyBase {
    action: PostDeleteClusterActionEnum;
    version: PostDeleteClusterVersionEnum;
}
export declare class PostDeleteClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClusterRequest extends SpeakeasyBase {
    queryParams: PostDeleteClusterQueryParams;
    headers: PostDeleteClusterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
