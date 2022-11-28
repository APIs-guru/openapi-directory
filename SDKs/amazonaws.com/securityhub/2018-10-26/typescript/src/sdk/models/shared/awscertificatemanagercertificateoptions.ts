import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCertificateManagerCertificateOptions
/** 
 * Contains other options for the certificate.
**/
export class AwsCertificateManagerCertificateOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateTransparencyLoggingPreference" })
  certificateTransparencyLoggingPreference?: string;
}
