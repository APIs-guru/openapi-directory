import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteOptionGroupActionEnum {
    DeleteOptionGroup = "DeleteOptionGroup"
}
export declare enum PostDeleteOptionGroupVersionEnum {
    TwoThousandAndThirteen0212 = "2013-02-12"
}
export declare class PostDeleteOptionGroupQueryParams extends SpeakeasyBase {
    action: PostDeleteOptionGroupActionEnum;
    version: PostDeleteOptionGroupVersionEnum;
}
export declare class PostDeleteOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteOptionGroupRequest extends SpeakeasyBase {
    queryParams: PostDeleteOptionGroupQueryParams;
    headers: PostDeleteOptionGroupHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
