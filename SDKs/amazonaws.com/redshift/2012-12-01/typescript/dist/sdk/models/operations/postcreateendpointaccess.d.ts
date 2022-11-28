import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateEndpointAccessActionEnum {
    CreateEndpointAccess = "CreateEndpointAccess"
}
export declare enum PostCreateEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateEndpointAccessQueryParams extends SpeakeasyBase {
    action: PostCreateEndpointAccessActionEnum;
    version: PostCreateEndpointAccessVersionEnum;
}
export declare class PostCreateEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateEndpointAccessRequest extends SpeakeasyBase {
    queryParams: PostCreateEndpointAccessQueryParams;
    headers: PostCreateEndpointAccessHeaders;
    request?: Uint8Array;
}
export declare class PostCreateEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
