import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyOptionGroupActionEnum {
    ModifyOptionGroup = "ModifyOptionGroup"
}
export declare enum PostModifyOptionGroupVersionEnum {
    TwoThousandAndThirteen0909 = "2013-09-09"
}
export declare class PostModifyOptionGroupQueryParams extends SpeakeasyBase {
    action: PostModifyOptionGroupActionEnum;
    version: PostModifyOptionGroupVersionEnum;
}
export declare class PostModifyOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyOptionGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyOptionGroupQueryParams;
    headers: PostModifyOptionGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
