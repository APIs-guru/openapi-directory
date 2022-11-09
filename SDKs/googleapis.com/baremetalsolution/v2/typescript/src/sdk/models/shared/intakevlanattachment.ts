import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntakeVlanAttachment
/** 
 * A GCP vlan attachment.
**/
export class IntakeVlanAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pairingKey" })
  pairingKey?: string;
}
