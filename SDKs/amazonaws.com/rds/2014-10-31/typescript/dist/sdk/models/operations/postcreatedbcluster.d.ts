import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDbClusterActionEnum {
    CreateDbCluster = "CreateDBCluster"
}
export declare enum PostCreateDbClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbClusterQueryParams extends SpeakeasyBase {
    action: PostCreateDbClusterActionEnum;
    version: PostCreateDbClusterVersionEnum;
}
export declare class PostCreateDbClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbClusterRequest extends SpeakeasyBase {
    queryParams: PostCreateDbClusterQueryParams;
    headers: PostCreateDbClusterHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
