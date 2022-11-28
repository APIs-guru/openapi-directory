import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGetAttributesActionEnum {
    GetAttributes = "GetAttributes"
}
export declare enum PostGetAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostGetAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostGetAttributesActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostGetAttributesVersionEnum;
}
export declare class PostGetAttributesRequest extends SpeakeasyBase {
    queryParams: PostGetAttributesQueryParams;
    request?: Uint8Array;
}
export declare class PostGetAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
