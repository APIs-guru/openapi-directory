import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}
export declare enum GetDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GetDomainMetadataQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GetDomainMetadataActionEnum;
    domainName: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GetDomainMetadataVersionEnum;
}
export declare class GetDomainMetadataRequest extends SpeakeasyBase {
    queryParams: GetDomainMetadataQueryParams;
}
export declare class GetDomainMetadataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
