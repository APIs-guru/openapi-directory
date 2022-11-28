import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterActionEnum {
    ModifyCluster = "ModifyCluster"
}
export declare enum PostModifyClusterVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterQueryParams extends SpeakeasyBase {
    action: PostModifyClusterActionEnum;
    version: PostModifyClusterVersionEnum;
}
export declare class PostModifyClusterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterQueryParams;
    headers: PostModifyClusterHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
