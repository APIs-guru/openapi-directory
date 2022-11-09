import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssumeRoleWithWebIdentityActionEnum {
    AssumeRoleWithWebIdentity = "AssumeRoleWithWebIdentity"
}
export declare enum PostAssumeRoleWithWebIdentityVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostAssumeRoleWithWebIdentityQueryParams extends SpeakeasyBase {
    action: PostAssumeRoleWithWebIdentityActionEnum;
    version: PostAssumeRoleWithWebIdentityVersionEnum;
}
export declare class PostAssumeRoleWithWebIdentityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssumeRoleWithWebIdentityRequest extends SpeakeasyBase {
    queryParams: PostAssumeRoleWithWebIdentityQueryParams;
    headers: PostAssumeRoleWithWebIdentityHeaders;
    request?: Uint8Array;
}
export declare class PostAssumeRoleWithWebIdentityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
