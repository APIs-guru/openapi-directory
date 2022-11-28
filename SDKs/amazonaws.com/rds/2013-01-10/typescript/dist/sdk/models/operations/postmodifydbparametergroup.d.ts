import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbParameterGroupActionEnum {
    ModifyDbParameterGroup = "ModifyDBParameterGroup"
}
export declare enum PostModifyDbParameterGroupVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class PostModifyDbParameterGroupQueryParams extends SpeakeasyBase {
    action: PostModifyDbParameterGroupActionEnum;
    version: PostModifyDbParameterGroupVersionEnum;
}
export declare class PostModifyDbParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyDbParameterGroupQueryParams;
    headers: PostModifyDbParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
