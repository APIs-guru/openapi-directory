import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostAssumeRoleWithSamlActionEnum {
    AssumeRoleWithSaml = "AssumeRoleWithSAML"
}
export declare enum PostAssumeRoleWithSamlVersionEnum {
    TwoThousandAndEleven0615 = "2011-06-15"
}
export declare class PostAssumeRoleWithSamlQueryParams extends SpeakeasyBase {
    action: PostAssumeRoleWithSamlActionEnum;
    version: PostAssumeRoleWithSamlVersionEnum;
}
export declare class PostAssumeRoleWithSamlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostAssumeRoleWithSamlRequest extends SpeakeasyBase {
    queryParams: PostAssumeRoleWithSamlQueryParams;
    headers: PostAssumeRoleWithSamlHeaders;
    request?: Uint8Array;
}
export declare class PostAssumeRoleWithSamlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
