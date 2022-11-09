import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostListDomainsActionEnum {
    ListDomains = "ListDomains"
}
export declare enum PostListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostListDomainsQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostListDomainsActionEnum;
    maxNumberOfDomains?: string;
    nextToken?: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostListDomainsVersionEnum;
}
export declare class PostListDomainsRequest extends SpeakeasyBase {
    queryParams: PostListDomainsQueryParams;
    request?: Uint8Array;
}
export declare class PostListDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
