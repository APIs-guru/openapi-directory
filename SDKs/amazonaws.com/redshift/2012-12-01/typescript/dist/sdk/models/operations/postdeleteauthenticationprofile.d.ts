import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteAuthenticationProfileActionEnum {
    DeleteAuthenticationProfile = "DeleteAuthenticationProfile"
}
export declare enum PostDeleteAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: PostDeleteAuthenticationProfileActionEnum;
    version: PostDeleteAuthenticationProfileVersionEnum;
}
export declare class PostDeleteAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: PostDeleteAuthenticationProfileQueryParams;
    headers: PostDeleteAuthenticationProfileHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
