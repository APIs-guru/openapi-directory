import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResumeClusterActionEnum {
    ResumeCluster = "ResumeCluster"
}
export declare enum PostResumeClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostResumeClusterQueryParams extends SpeakeasyBase {
    action: PostResumeClusterActionEnum;
    version: PostResumeClusterVersionEnum;
}
export declare class PostResumeClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResumeClusterRequest extends SpeakeasyBase {
    queryParams: PostResumeClusterQueryParams;
    headers: PostResumeClusterHeaders;
    request?: Uint8Array;
}
export declare class PostResumeClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
