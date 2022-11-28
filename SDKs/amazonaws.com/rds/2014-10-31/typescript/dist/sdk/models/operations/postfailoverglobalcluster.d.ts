import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostFailoverGlobalClusterActionEnum {
    FailoverGlobalCluster = "FailoverGlobalCluster"
}
export declare enum PostFailoverGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostFailoverGlobalClusterQueryParams extends SpeakeasyBase {
    action: PostFailoverGlobalClusterActionEnum;
    version: PostFailoverGlobalClusterVersionEnum;
}
export declare class PostFailoverGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostFailoverGlobalClusterRequest extends SpeakeasyBase {
    queryParams: PostFailoverGlobalClusterQueryParams;
    headers: PostFailoverGlobalClusterHeaders;
    request?: Uint8Array;
}
export declare class PostFailoverGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
