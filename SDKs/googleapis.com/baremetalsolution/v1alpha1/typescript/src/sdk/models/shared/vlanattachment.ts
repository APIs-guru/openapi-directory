import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VlanAttachment
/** 
 * A GCP vlan attachment.
**/
export class VlanAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pairingKey" })
  pairingKey?: string;
}
