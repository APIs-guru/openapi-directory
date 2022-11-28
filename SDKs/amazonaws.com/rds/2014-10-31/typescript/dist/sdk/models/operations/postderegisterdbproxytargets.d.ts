import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeregisterDbProxyTargetsActionEnum {
    DeregisterDbProxyTargets = "DeregisterDBProxyTargets"
}
export declare enum PostDeregisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeregisterDbProxyTargetsQueryParams extends SpeakeasyBase {
    action: PostDeregisterDbProxyTargetsActionEnum;
    version: PostDeregisterDbProxyTargetsVersionEnum;
}
export declare class PostDeregisterDbProxyTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeregisterDbProxyTargetsRequest extends SpeakeasyBase {
    queryParams: PostDeregisterDbProxyTargetsQueryParams;
    headers: PostDeregisterDbProxyTargetsHeaders;
    request?: Uint8Array;
}
export declare class PostDeregisterDbProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
