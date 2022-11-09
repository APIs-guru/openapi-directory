import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteEndpointAccessActionEnum {
    DeleteEndpointAccess = "DeleteEndpointAccess"
}
export declare enum PostDeleteEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostDeleteEndpointAccessActionEnum;
    version: PostDeleteEndpointAccessVersionEnum;
}
export declare class PostDeleteEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostDeleteEndpointAccessQueryParams;
    headers: PostDeleteEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
