import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateAuthenticationProfileActionEnum {
    CreateAuthenticationProfile = "CreateAuthenticationProfile"
}
export declare enum GetCreateAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetCreateAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: GetCreateAuthenticationProfileActionEnum;
    authenticationProfileContent: string;
    authenticationProfileName: string;
    version: GetCreateAuthenticationProfileVersionEnum;
}
export declare class GetCreateAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: GetCreateAuthenticationProfileQueryParams;
    headers: GetCreateAuthenticationProfileHeaders;
}
export declare class GetCreateAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
