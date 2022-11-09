import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostSelectActionEnum {
    Select = "Select"
}
export declare enum PostSelectVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostSelectQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostSelectActionEnum;
    nextToken?: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostSelectVersionEnum;
}
export declare class PostSelectRequest extends SpeakeasyBase {
    queryParams: PostSelectQueryParams;
    request?: Uint8Array;
}
export declare class PostSelectResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
