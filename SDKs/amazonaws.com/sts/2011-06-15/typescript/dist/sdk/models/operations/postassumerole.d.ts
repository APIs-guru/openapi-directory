import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostAssumeRoleActionEnum {
    AssumeRole = "AssumeRole"
}
export declare enum PostAssumeRoleVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostAssumeRoleQueryParams extends SpeakeasyBase {
    action: PostAssumeRoleActionEnum;
    version: PostAssumeRoleVersionEnum;
}
export declare class PostAssumeRoleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssumeRoleRequest extends SpeakeasyBase {
    queryParams: PostAssumeRoleQueryParams;
    headers: PostAssumeRoleHeaders;
    request?: Uint8Array;
}
export declare class PostAssumeRoleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
