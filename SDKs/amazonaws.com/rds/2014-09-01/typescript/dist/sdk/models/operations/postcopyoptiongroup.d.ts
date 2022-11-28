import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCopyOptionGroupActionEnum {
    CopyOptionGroup = "CopyOptionGroup"
}
export declare enum PostCopyOptionGroupVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostCopyOptionGroupQueryParams extends SpeakeasyBase {
    action: PostCopyOptionGroupActionEnum;
    version: PostCopyOptionGroupVersionEnum;
}
export declare class PostCopyOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCopyOptionGroupRequest extends SpeakeasyBase {
    queryParams: PostCopyOptionGroupQueryParams;
    headers: PostCopyOptionGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCopyOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
