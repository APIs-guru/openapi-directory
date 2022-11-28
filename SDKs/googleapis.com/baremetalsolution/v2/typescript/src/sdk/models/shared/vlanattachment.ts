import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";



// VlanAttachment
/** 
 * VLAN attachment details.
**/
export class VlanAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=pairingKey" })
  pairingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=peerIp" })
  peerIp?: string;

  @SpeakeasyMetadata({ data: "json, name=peerVlanId" })
  peerVlanId?: string;

  @SpeakeasyMetadata({ data: "json, name=qosPolicy" })
  qosPolicy?: QosPolicy;

  @SpeakeasyMetadata({ data: "json, name=routerIp" })
  routerIp?: string;
}
