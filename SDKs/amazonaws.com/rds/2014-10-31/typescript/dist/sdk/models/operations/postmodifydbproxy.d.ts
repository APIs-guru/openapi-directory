import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbProxyActionEnum {
    ModifyDbProxy = "ModifyDBProxy"
}
export declare enum PostModifyDbProxyVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbProxyQueryParams extends SpeakeasyBase {
    action: PostModifyDbProxyActionEnum;
    version: PostModifyDbProxyVersionEnum;
}
export declare class PostModifyDbProxyHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbProxyRequest extends SpeakeasyBase {
    queryParams: PostModifyDbProxyQueryParams;
    headers: PostModifyDbProxyHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbProxyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
