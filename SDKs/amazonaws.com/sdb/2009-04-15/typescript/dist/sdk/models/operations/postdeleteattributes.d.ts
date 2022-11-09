import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteAttributesActionEnum {
    DeleteAttributes = "DeleteAttributes"
}
export declare enum PostDeleteAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostDeleteAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostDeleteAttributesActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostDeleteAttributesVersionEnum;
}
export declare class PostDeleteAttributesRequest extends SpeakeasyBase {
    queryParams: PostDeleteAttributesQueryParams;
    request?: Uint8Array;
}
export declare class PostDeleteAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
