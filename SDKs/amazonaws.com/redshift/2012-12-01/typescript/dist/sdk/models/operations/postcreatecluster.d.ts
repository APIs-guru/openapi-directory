import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateClusterActionEnum {
    CreateCluster = "CreateCluster"
}
export declare enum PostCreateClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateClusterQueryParams extends SpeakeasyBase {
    action: PostCreateClusterActionEnum;
    version: PostCreateClusterVersionEnum;
}
export declare class PostCreateClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClusterRequest extends SpeakeasyBase {
    queryParams: PostCreateClusterQueryParams;
    headers: PostCreateClusterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
