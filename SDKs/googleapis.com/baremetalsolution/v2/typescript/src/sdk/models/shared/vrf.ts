import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QosPolicy } from "./qospolicy";
import { VlanAttachment } from "./vlanattachment";

export enum VrfStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Provisioning = "PROVISIONING"
,    Provisioned = "PROVISIONED"
}


// Vrf
/** 
 * A network VRF.
**/
export class Vrf extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=qosPolicy" })
  qosPolicy?: QosPolicy;

  @Metadata({ data: "json, name=state" })
  state?: VrfStateEnum;

  @Metadata({ data: "json, name=vlanAttachments", elemType: shared.VlanAttachment })
  vlanAttachments?: VlanAttachment[];
}
