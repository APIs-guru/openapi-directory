import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmClientCertificate } from "./hsmclientcertificate";



// HsmClientCertificateMessage
/** 
 * <p/>
**/
export class HsmClientCertificateMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: HsmClientCertificate })
  hsmClientCertificates?: HsmClientCertificate[];

  @SpeakeasyMetadata()
  marker?: string;
}
