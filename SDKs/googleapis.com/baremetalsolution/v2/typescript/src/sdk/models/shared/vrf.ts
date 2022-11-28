import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";
import { VlanAttachment } from "./vlanattachment";


export enum VrfStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED"
}


// Vrf
/** 
 * A network VRF.
**/
export class Vrf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=qosPolicy" })
  qosPolicy?: QosPolicy;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: VrfStateEnum;

  @SpeakeasyMetadata({ data: "json, name=vlanAttachments", elemType: VlanAttachment })
  vlanAttachments?: VlanAttachment[];
}
