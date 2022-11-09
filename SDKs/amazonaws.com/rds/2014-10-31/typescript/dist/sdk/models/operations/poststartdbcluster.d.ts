import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostStartDbClusterActionEnum {
    StartDbCluster = "StartDBCluster"
}
export declare enum PostStartDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStartDbClusterQueryParams extends SpeakeasyBase {
    action: PostStartDbClusterActionEnum;
    version: PostStartDbClusterVersionEnum;
}
export declare class PostStartDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartDbClusterRequest extends SpeakeasyBase {
    queryParams: PostStartDbClusterQueryParams;
    headers: PostStartDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostStartDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
