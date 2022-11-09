import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum PostCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostCreateDomainQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostCreateDomainActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostCreateDomainVersionEnum;
}
export declare class PostCreateDomainRequest extends SpeakeasyBase {
    queryParams: PostCreateDomainQueryParams;
    request?: Uint8Array;
}
export declare class PostCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
