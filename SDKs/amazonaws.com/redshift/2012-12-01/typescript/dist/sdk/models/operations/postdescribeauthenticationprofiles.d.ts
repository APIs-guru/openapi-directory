import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeAuthenticationProfilesActionEnum {
    DescribeAuthenticationProfiles = "DescribeAuthenticationProfiles"
}
export declare enum PostDescribeAuthenticationProfilesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeAuthenticationProfilesQueryParams extends SpeakeasyBase {
    action: PostDescribeAuthenticationProfilesActionEnum;
    version: PostDescribeAuthenticationProfilesVersionEnum;
}
export declare class PostDescribeAuthenticationProfilesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAuthenticationProfilesRequest extends SpeakeasyBase {
    queryParams: PostDescribeAuthenticationProfilesQueryParams;
    headers: PostDescribeAuthenticationProfilesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAuthenticationProfilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
