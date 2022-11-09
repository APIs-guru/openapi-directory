import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsCertificateManagerCertificateOptions
/** 
 * Contains other options for the certificate.
**/
export class AwsCertificateManagerCertificateOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateTransparencyLoggingPreference" })
  certificateTransparencyLoggingPreference?: string;
}
