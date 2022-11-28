import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDomainActionEnum {
    DeleteDomain = "DeleteDomain"
}
export declare enum GetDeleteDomainVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetDeleteDomainQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetDeleteDomainActionEnum;
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetDeleteDomainVersionEnum;
}
export declare class GetDeleteDomainRequest extends SpeakeasyBase {
    queryParams: GetDeleteDomainQueryParams;
}
export declare class GetDeleteDomainResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
