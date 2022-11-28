import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSslCertificatesQueryParams extends SpeakeasyBase {
    skip?: number;
    take?: number;
}
export declare class GetSslCertificatesRequest extends SpeakeasyBase {
    queryParams: GetSslCertificatesQueryParams;
}
export declare class GetSslCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    sslCertificates?: shared.SslCertificate[];
    statusCode: number;
}
