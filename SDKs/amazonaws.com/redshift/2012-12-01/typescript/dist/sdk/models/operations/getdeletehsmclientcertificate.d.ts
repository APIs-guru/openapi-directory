import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteHsmClientCertificateActionEnum {
    DeleteHsmClientCertificate = "DeleteHsmClientCertificate"
}
export declare enum GetDeleteHsmClientCertificateVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDeleteHsmClientCertificateQueryParams extends SpeakeasyBase {
    action: GetDeleteHsmClientCertificateActionEnum;
    hsmClientCertificateIdentifier: string;
    version: GetDeleteHsmClientCertificateVersionEnum;
}
export declare class GetDeleteHsmClientCertificateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteHsmClientCertificateRequest extends SpeakeasyBase {
    queryParams: GetDeleteHsmClientCertificateQueryParams;
    headers: GetDeleteHsmClientCertificateHeaders;
}
export declare class GetDeleteHsmClientCertificateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
