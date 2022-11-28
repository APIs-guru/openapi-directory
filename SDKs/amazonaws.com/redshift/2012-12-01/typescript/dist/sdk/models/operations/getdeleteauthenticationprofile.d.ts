import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteAuthenticationProfileActionEnum {
    DeleteAuthenticationProfile = "DeleteAuthenticationProfile"
}
export declare enum GetDeleteAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: GetDeleteAuthenticationProfileActionEnum;
    authenticationProfileName: string;
    version: GetDeleteAuthenticationProfileVersionEnum;
}
export declare class GetDeleteAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: GetDeleteAuthenticationProfileQueryParams;
    headers: GetDeleteAuthenticationProfileHeaders;
}
export declare class GetDeleteAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
