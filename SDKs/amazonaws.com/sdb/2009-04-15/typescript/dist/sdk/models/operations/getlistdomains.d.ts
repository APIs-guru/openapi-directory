import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListDomainsActionEnum {
    ListDomains = "ListDomains"
}
export declare enum GetListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetListDomainsQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetListDomainsActionEnum;
    maxNumberOfDomains?: number;
    nextToken?: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetListDomainsVersionEnum;
}
export declare class GetListDomainsRequest extends SpeakeasyBase {
    queryParams: GetListDomainsQueryParams;
}
export declare class GetListDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
