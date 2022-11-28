import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAuthenticationProfilesActionEnum {
    DescribeAuthenticationProfiles = "DescribeAuthenticationProfiles"
}
export declare enum GetDescribeAuthenticationProfilesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeAuthenticationProfilesQueryParams extends SpeakeasyBase {
    action: GetDescribeAuthenticationProfilesActionEnum;
    authenticationProfileName?: string;
    version: GetDescribeAuthenticationProfilesVersionEnum;
}
export declare class GetDescribeAuthenticationProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAuthenticationProfilesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAuthenticationProfilesQueryParams;
    headers: GetDescribeAuthenticationProfilesHeaders;
}
export declare class GetDescribeAuthenticationProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
