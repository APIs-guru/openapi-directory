import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCertificatePdfSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  certAuth: shared.SchemeCertAuth;
}


export class GetCertificatePdfRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CertificateRequest;

  @Metadata()
  security: GetCertificatePdfSecurity;
}


export class GetCertificatePdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
