import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";


export class SslCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=common_name" })
  commonName?: string;

  @Metadata({ data: "json, name=expires_after" })
  expiresAfter?: Date;

  @Metadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @Metadata({ data: "json, name=type" })
  type?: SslCertificateTypeEnum;

  @Metadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;
}
