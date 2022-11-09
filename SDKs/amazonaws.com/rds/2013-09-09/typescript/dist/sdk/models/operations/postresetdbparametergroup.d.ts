import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostResetDbParameterGroupActionEnum {
    ResetDbParameterGroup = "ResetDBParameterGroup"
}
export declare enum PostResetDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostResetDbParameterGroupQueryParams extends SpeakeasyBase {
    action: PostResetDbParameterGroupActionEnum;
    version: PostResetDbParameterGroupVersionEnum;
}
export declare class PostResetDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostResetDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostResetDbParameterGroupQueryParams;
    headers: PostResetDbParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostResetDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
