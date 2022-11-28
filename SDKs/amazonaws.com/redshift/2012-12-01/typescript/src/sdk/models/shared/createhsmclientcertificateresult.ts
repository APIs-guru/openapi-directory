import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsmClientCertificate } from "./hsmclientcertificate";



export class CreateHsmClientCertificateResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hsmClientCertificate?: HsmClientCertificate;
}
