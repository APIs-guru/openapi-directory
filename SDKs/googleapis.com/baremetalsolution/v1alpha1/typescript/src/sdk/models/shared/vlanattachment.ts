import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VlanAttachment
/** 
 * A GCP vlan attachment.
**/
export class VlanAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pairingKey" })
  pairingKey?: string;
}
