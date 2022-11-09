import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostResetClusterParameterGroupActionEnum {
    ResetClusterParameterGroup = "ResetClusterParameterGroup"
}
export declare enum PostResetClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostResetClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostResetClusterParameterGroupActionEnum;
    version: PostResetClusterParameterGroupVersionEnum;
}
export declare class PostResetClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostResetClusterParameterGroupQueryParams;
    headers: PostResetClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostResetClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
