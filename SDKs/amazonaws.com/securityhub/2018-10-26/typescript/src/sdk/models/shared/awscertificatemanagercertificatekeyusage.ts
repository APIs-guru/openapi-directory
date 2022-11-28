import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsCertificateManagerCertificateKeyUsage
/** 
 * Contains information about a key usage X.509 v3 extension object.
**/
export class AwsCertificateManagerCertificateKeyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
