import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



// HsmClientCertificate
/** 
 * Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
**/
export class HsmClientCertificate extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hsmClientCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  hsmClientCertificatePublicKey?: string;

  @SpeakeasyMetadata({ elemType: Tag })
  tags?: Tag[];
}
