import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetCallerIdentityActionEnum {
    GetCallerIdentity = "GetCallerIdentity"
}
export declare enum PostGetCallerIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostGetCallerIdentityQueryParams extends SpeakeasyBase {
    action: PostGetCallerIdentityActionEnum;
    version: PostGetCallerIdentityVersionEnum;
}
export declare class PostGetCallerIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostGetCallerIdentityRequest extends SpeakeasyBase {
    queryParams: PostGetCallerIdentityQueryParams;
    headers: PostGetCallerIdentityHeaders;
    request?: Uint8Array;
}
export declare class PostGetCallerIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
