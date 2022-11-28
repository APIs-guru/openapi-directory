import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateAuthenticationProfileActionEnum {
    CreateAuthenticationProfile = "CreateAuthenticationProfile"
}
export declare enum PostCreateAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: PostCreateAuthenticationProfileActionEnum;
    version: PostCreateAuthenticationProfileVersionEnum;
}
export declare class PostCreateAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: PostCreateAuthenticationProfileQueryParams;
    headers: PostCreateAuthenticationProfileHeaders;
    request?: Uint8Array;
}
export declare class PostCreateAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
