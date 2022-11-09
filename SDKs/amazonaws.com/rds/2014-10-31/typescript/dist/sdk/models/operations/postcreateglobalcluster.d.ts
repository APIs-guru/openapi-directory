import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateGlobalClusterActionEnum {
    CreateGlobalCluster = "CreateGlobalCluster"
}
export declare enum PostCreateGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateGlobalClusterQueryParams extends SpeakeasyBase {
    action: PostCreateGlobalClusterActionEnum;
    version: PostCreateGlobalClusterVersionEnum;
}
export declare class PostCreateGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateGlobalClusterRequest extends SpeakeasyBase {
    queryParams: PostCreateGlobalClusterQueryParams;
    headers: PostCreateGlobalClusterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
