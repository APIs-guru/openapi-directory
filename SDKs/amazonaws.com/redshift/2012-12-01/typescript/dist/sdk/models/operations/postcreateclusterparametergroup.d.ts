import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateClusterParameterGroupActionEnum {
    CreateClusterParameterGroup = "CreateClusterParameterGroup"
}
export declare enum PostCreateClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostCreateClusterParameterGroupActionEnum;
    version: PostCreateClusterParameterGroupVersionEnum;
}
export declare class PostCreateClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateClusterParameterGroupQueryParams;
    headers: PostCreateClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
