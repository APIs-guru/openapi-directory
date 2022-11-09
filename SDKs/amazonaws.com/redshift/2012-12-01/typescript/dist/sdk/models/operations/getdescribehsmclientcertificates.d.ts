import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDescribeHsmClientCertificatesActionEnum {
    DescribeHsmClientCertificates = "DescribeHsmClientCertificates"
}
export declare enum GetDescribeHsmClientCertificatesVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeHsmClientCertificatesQueryParams extends SpeakeasyBase {
    action: GetDescribeHsmClientCertificatesActionEnum;
    hsmClientCertificateIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
    version: GetDescribeHsmClientCertificatesVersionEnum;
}
export declare class GetDescribeHsmClientCertificatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeHsmClientCertificatesRequest extends SpeakeasyBase {
    queryParams: GetDescribeHsmClientCertificatesQueryParams;
    headers: GetDescribeHsmClientCertificatesHeaders;
}
export declare class GetDescribeHsmClientCertificatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
