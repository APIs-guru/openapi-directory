import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteDbClusterParameterGroupActionEnum {
    DeleteDbClusterParameterGroup = "DeleteDBClusterParameterGroup"
}
export declare enum PostDeleteDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteDbClusterParameterGroupActionEnum;
    version: PostDeleteDbClusterParameterGroupVersionEnum;
}
export declare class PostDeleteDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbClusterParameterGroupQueryParams;
    headers: PostDeleteDbClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
