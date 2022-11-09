import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostRebootClusterActionEnum {
    RebootCluster = "RebootCluster"
}
export declare enum PostRebootClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostRebootClusterQueryParams extends SpeakeasyBase {
    action: PostRebootClusterActionEnum;
    version: PostRebootClusterVersionEnum;
}
export declare class PostRebootClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRebootClusterRequest extends SpeakeasyBase {
    queryParams: PostRebootClusterQueryParams;
    headers: PostRebootClusterHeaders;
    request?: Uint8Array;
}
export declare class PostRebootClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
