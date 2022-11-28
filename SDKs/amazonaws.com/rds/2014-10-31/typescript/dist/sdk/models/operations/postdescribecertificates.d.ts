import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCertificatesActionEnum {
    DescribeCertificates = "DescribeCertificates"
}
export declare enum PostDescribeCertificatesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeCertificatesQueryParams extends SpeakeasyBase {
    action: PostDescribeCertificatesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCertificatesVersionEnum;
}
export declare class PostDescribeCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCertificatesRequest extends SpeakeasyBase {
    queryParams: PostDescribeCertificatesQueryParams;
    headers: PostDescribeCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
