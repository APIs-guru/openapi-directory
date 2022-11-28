import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDomainMetadataActionEnum {
    DomainMetadata = "DomainMetadata"
}
export declare enum PostDomainMetadataVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class PostDomainMetadataQueryParams extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: PostDomainMetadataActionEnum;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: PostDomainMetadataVersionEnum;
}
export declare class PostDomainMetadataRequest extends SpeakeasyBase {
    queryParams: PostDomainMetadataQueryParams;
    request?: Uint8Array;
}
export declare class PostDomainMetadataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
