import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntakeVlanAttachment
/** 
 * A GCP vlan attachment.
**/
export class IntakeVlanAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pairingKey" })
  pairingKey?: string;
}
