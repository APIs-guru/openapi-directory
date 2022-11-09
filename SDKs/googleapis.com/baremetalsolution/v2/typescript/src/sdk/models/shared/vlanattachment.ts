import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { QosPolicy } from "./qospolicy";


// VlanAttachment
/** 
 * VLAN attachment details.
**/
export class VlanAttachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=pairingKey" })
  pairingKey?: string;

  @Metadata({ data: "json, name=peerIp" })
  peerIp?: string;

  @Metadata({ data: "json, name=peerVlanId" })
  peerVlanId?: string;

  @Metadata({ data: "json, name=qosPolicy" })
  qosPolicy?: QosPolicy;

  @Metadata({ data: "json, name=routerIp" })
  routerIp?: string;
}
