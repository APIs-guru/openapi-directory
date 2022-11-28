import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostBacktrackDbClusterActionEnum {
    BacktrackDbCluster = "BacktrackDBCluster"
}
export declare enum PostBacktrackDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostBacktrackDbClusterQueryParams extends SpeakeasyBase {
    action: PostBacktrackDbClusterActionEnum;
    version: PostBacktrackDbClusterVersionEnum;
}
export declare class PostBacktrackDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostBacktrackDbClusterRequest extends SpeakeasyBase {
    queryParams: PostBacktrackDbClusterQueryParams;
    headers: PostBacktrackDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostBacktrackDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
