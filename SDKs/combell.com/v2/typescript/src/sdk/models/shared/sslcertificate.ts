import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";



export class SslCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=common_name" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_after" })
  expiresAfter?: Date;

  @SpeakeasyMetadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SslCertificateTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;
}
