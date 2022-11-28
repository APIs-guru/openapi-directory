import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CertificateRawData
/** 
 * An SSL certificate obtained from a certificate authority.
**/
export class CertificateRawData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publicCertificate" })
  publicCertificate?: string;
}
