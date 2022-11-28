import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeHsmClientCertificatesActionEnum {
    DescribeHsmClientCertificates = "DescribeHsmClientCertificates"
}
export declare enum PostDescribeHsmClientCertificatesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeHsmClientCertificatesQueryParams extends SpeakeasyBase {
    action: PostDescribeHsmClientCertificatesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeHsmClientCertificatesVersionEnum;
}
export declare class PostDescribeHsmClientCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeHsmClientCertificatesRequest extends SpeakeasyBase {
    queryParams: PostDescribeHsmClientCertificatesQueryParams;
    headers: PostDescribeHsmClientCertificatesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeHsmClientCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
