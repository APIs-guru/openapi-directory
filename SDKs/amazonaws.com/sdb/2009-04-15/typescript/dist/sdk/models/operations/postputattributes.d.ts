import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostPutAttributesActionEnum {
    PutAttributes = "PutAttributes"
}
export declare enum PostPutAttributesVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostPutAttributesQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostPutAttributesActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostPutAttributesVersionEnum;
}
export declare class PostPutAttributesRequest extends SpeakeasyBase {
    queryParams: PostPutAttributesQueryParams;
    request?: Uint8Array;
}
export declare class PostPutAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
