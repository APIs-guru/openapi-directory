import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HsmStatus
/** 
 * Describes the status of changes to HSM settings.
**/
export class HsmStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  hsmClientCertificateIdentifier?: string;

  @SpeakeasyMetadata()
  hsmConfigurationIdentifier?: string;

  @SpeakeasyMetadata()
  status?: string;
}
