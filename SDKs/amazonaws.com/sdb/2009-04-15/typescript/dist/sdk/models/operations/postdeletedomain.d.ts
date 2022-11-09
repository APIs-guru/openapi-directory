import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum PostDeleteDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostDeleteDomainQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostDeleteDomainActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostDeleteDomainVersionEnum;
}
export declare class PostDeleteDomainRequest extends SpeakeasyBase {
    queryParams: PostDeleteDomainQueryParams;
    request?: Uint8Array;
}
export declare class PostDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
