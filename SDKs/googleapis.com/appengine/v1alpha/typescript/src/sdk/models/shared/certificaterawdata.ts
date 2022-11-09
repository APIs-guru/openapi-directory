import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CertificateRawData
/** 
 * An SSL certificate obtained from a certificate authority.
**/
export class CertificateRawData extends SpeakeasyBase {
  @Metadata({ data: "json, name=privateKey" })
  privateKey?: string;

  @Metadata({ data: "json, name=publicCertificate" })
  publicCertificate?: string;
}
