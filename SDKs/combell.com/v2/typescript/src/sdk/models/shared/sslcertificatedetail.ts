import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SslSubjectAltName } from "./sslsubjectaltname";
import { SslCertificateTypeEnum } from "./sslcertificatetypeenum";
import { SslCertificateValidationLevelEnum } from "./sslcertificatevalidationlevelenum";


export class SslCertificateDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=common_name" })
  commonName?: string;

  @Metadata({ data: "json, name=expires_after" })
  expiresAfter?: Date;

  @Metadata({ data: "json, name=sha1_fingerprint" })
  sha1Fingerprint?: string;

  @Metadata({ data: "json, name=subject_alt_names", elemType: shared.SslSubjectAltName })
  subjectAltNames?: SslSubjectAltName[];

  @Metadata({ data: "json, name=type" })
  type?: SslCertificateTypeEnum;

  @Metadata({ data: "json, name=validation_level" })
  validationLevel?: SslCertificateValidationLevelEnum;
}
