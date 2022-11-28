import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateDomainActionEnum {
    CreateDomain = "CreateDomain"
}
export declare enum GetCreateDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetCreateDomainQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetCreateDomainActionEnum;
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetCreateDomainVersionEnum;
}
export declare class GetCreateDomainRequest extends SpeakeasyBase {
    queryParams: GetCreateDomainQueryParams;
}
export declare class GetCreateDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
