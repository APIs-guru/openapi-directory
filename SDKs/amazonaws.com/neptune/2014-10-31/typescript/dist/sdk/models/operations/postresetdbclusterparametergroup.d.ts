import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostResetDbClusterParameterGroupActionEnum {
    ResetDbClusterParameterGroup = "ResetDBClusterParameterGroup"
}
export declare enum PostResetDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostResetDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostResetDbClusterParameterGroupActionEnum;
    version: PostResetDbClusterParameterGroupVersionEnum;
}
export declare class PostResetDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostResetDbClusterParameterGroupQueryParams;
    headers: PostResetDbClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostResetDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
