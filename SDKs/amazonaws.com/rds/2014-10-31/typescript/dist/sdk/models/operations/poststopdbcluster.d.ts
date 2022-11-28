import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStopDbClusterActionEnum {
    StopDbCluster = "StopDBCluster"
}
export declare enum PostStopDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStopDbClusterQueryParams extends SpeakeasyBase {
    action: PostStopDbClusterActionEnum;
    version: PostStopDbClusterVersionEnum;
}
export declare class PostStopDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopDbClusterRequest extends SpeakeasyBase {
    queryParams: PostStopDbClusterQueryParams;
    headers: PostStopDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostStopDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
