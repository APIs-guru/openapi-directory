import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyAuthenticationProfileActionEnum {
    ModifyAuthenticationProfile = "ModifyAuthenticationProfile"
}
export declare enum GetModifyAuthenticationProfileVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyAuthenticationProfileQueryParams extends SpeakeasyBase {
    action: GetModifyAuthenticationProfileActionEnum;
    authenticationProfileContent: string;
    authenticationProfileName: string;
    version: GetModifyAuthenticationProfileVersionEnum;
}
export declare class GetModifyAuthenticationProfileHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyAuthenticationProfileRequest extends SpeakeasyBase {
    queryParams: GetModifyAuthenticationProfileQueryParams;
    headers: GetModifyAuthenticationProfileHeaders;
}
export declare class GetModifyAuthenticationProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
