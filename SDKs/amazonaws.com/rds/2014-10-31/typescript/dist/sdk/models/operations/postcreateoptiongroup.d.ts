import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateOptionGroupActionEnum {
    CreateOptionGroup = "CreateOptionGroup"
}
export declare enum PostCreateOptionGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateOptionGroupQueryParams extends SpeakeasyBase {
    action: PostCreateOptionGroupActionEnum;
    version: PostCreateOptionGroupVersionEnum;
}
export declare class PostCreateOptionGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateOptionGroupRequest extends SpeakeasyBase {
    queryParams: PostCreateOptionGroupQueryParams;
    headers: PostCreateOptionGroupHeaders;
    request?: Uint8Array;
}
export declare class PostCreateOptionGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
