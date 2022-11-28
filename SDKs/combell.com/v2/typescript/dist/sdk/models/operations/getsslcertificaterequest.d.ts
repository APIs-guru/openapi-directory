import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSslCertificateRequestPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSslCertificateRequestRequest extends SpeakeasyBase {
    pathParams: GetSslCertificateRequestPathParams;
}
export declare class GetSslCertificateRequestResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    sslCertificateRequestDetail?: shared.SslCertificateRequestDetail;
    statusCode: number;
}
