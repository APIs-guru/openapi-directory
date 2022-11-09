import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteClusterParameterGroupActionEnum {
    DeleteClusterParameterGroup = "DeleteClusterParameterGroup"
}
export declare enum PostDeleteClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteClusterParameterGroupActionEnum;
    version: PostDeleteClusterParameterGroupVersionEnum;
}
export declare class PostDeleteClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteClusterParameterGroupQueryParams;
    headers: PostDeleteClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
