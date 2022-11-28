import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyGlobalClusterActionEnum {
    ModifyGlobalCluster = "ModifyGlobalCluster"
}
export declare enum PostModifyGlobalClusterVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyGlobalClusterQueryParams extends SpeakeasyBase {
    action: PostModifyGlobalClusterActionEnum;
    version: PostModifyGlobalClusterVersionEnum;
}
export declare class PostModifyGlobalClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyGlobalClusterRequest extends SpeakeasyBase {
    queryParams: PostModifyGlobalClusterQueryParams;
    headers: PostModifyGlobalClusterHeaders;
    request?: Uint8Array;
}
export declare class PostModifyGlobalClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
