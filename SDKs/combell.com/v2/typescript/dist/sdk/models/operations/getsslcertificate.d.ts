import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSslCertificatePathParams extends SpeakeasyBase {
    sha1Fingerprint: string;
}
export declare class GetSslCertificateQueryParams extends SpeakeasyBase {
    sha1Fingerprint: string;
}
export declare class GetSslCertificateRequest extends SpeakeasyBase {
    pathParams: GetSslCertificatePathParams;
    queryParams: GetSslCertificateQueryParams;
}
export declare class GetSslCertificateResponse extends SpeakeasyBase {
    contentType: string;
    sslCertificateDetail?: shared.SslCertificateDetail;
    statusCode: number;
}
