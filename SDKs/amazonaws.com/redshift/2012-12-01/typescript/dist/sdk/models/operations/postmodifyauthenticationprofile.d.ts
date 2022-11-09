import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyAuthenticationProfileActionEnum {
    ModifyAuthenticationProfile = "ModifyAuthenticationProfile"
}
export declare enum PostModifyAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: PostModifyAuthenticationProfileActionEnum;
    version: PostModifyAuthenticationProfileVersionEnum;
}
export declare class PostModifyAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: PostModifyAuthenticationProfileQueryParams;
    headers: PostModifyAuthenticationProfileHeaders;
    request?: Uint8Array;
}
export declare class PostModifyAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
