import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostPauseClusterActionEnum {
    PauseCluster = "PauseCluster"
}
export declare enum PostPauseClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostPauseClusterQueryParams extends SpeakeasyBase {
    action: PostPauseClusterActionEnum;
    version: PostPauseClusterVersionEnum;
}
export declare class PostPauseClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostPauseClusterRequest extends SpeakeasyBase {
    queryParams: PostPauseClusterQueryParams;
    headers: PostPauseClusterHeaders;
    request?: Uint8Array;
}
export declare class PostPauseClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
