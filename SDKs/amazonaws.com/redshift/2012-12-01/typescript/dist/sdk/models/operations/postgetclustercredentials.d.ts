import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetClusterCredentialsActionEnum {
    GetClusterCredentials = "GetClusterCredentials"
}
export declare enum PostGetClusterCredentialsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostGetClusterCredentialsQueryParams extends SpeakeasyBase {
    action: PostGetClusterCredentialsActionEnum;
    version: PostGetClusterCredentialsVersionEnum;
}
export declare class PostGetClusterCredentialsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetClusterCredentialsRequest extends SpeakeasyBase {
    queryParams: PostGetClusterCredentialsQueryParams;
    headers: PostGetClusterCredentialsHeaders;
    request?: Uint8Array;
}
export declare class PostGetClusterCredentialsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
