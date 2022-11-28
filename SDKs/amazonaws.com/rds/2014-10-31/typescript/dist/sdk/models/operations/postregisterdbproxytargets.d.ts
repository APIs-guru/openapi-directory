import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostRegisterDbProxyTargetsActionEnum {
    RegisterDbProxyTargets = "RegisterDBProxyTargets"
}
export declare enum PostRegisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostRegisterDbProxyTargetsQueryParams extends SpeakeasyBase {
    action: PostRegisterDbProxyTargetsActionEnum;
    version: PostRegisterDbProxyTargetsVersionEnum;
}
export declare class PostRegisterDbProxyTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostRegisterDbProxyTargetsRequest extends SpeakeasyBase {
    queryParams: PostRegisterDbProxyTargetsQueryParams;
    headers: PostRegisterDbProxyTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostRegisterDbProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
