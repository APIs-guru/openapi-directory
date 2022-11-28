import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCertificatePdfSecurity extends SpeakeasyBase {
    certAuth: shared.SchemeCertAuth;
}
export declare class GetCertificatePdfRequest extends SpeakeasyBase {
    request: shared.CertificateRequest;
    security: GetCertificatePdfSecurity;
}
export declare class GetCertificatePdfResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
