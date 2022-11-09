import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbClusterActionEnum {
    DeleteDbCluster = "DeleteDBCluster"
}
export declare enum PostDeleteDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbClusterQueryParams extends SpeakeasyBase {
    action: PostDeleteDbClusterActionEnum;
    version: PostDeleteDbClusterVersionEnum;
}
export declare class PostDeleteDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbClusterRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbClusterQueryParams;
    headers: PostDeleteDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
