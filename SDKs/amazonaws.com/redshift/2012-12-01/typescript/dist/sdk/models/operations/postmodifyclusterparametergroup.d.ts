import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyClusterParameterGroupActionEnum {
    ModifyClusterParameterGroup = "ModifyClusterParameterGroup"
}
export declare enum PostModifyClusterParameterGroupVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostModifyClusterParameterGroupActionEnum;
    version: PostModifyClusterParameterGroupVersionEnum;
}
export declare class PostModifyClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterParameterGroupQueryParams;
    headers: PostModifyClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
