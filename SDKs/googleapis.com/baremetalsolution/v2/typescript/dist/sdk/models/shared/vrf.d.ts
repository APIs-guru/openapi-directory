import { SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";
import { VlanAttachment } from "./vlanattachment";
export declare enum VrfStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Provisioning = "PROVISIONING",
    Provisioned = "PROVISIONED"
}
/**
 * A network VRF.
**/
export declare class Vrf extends SpeakeasyBase {
    name?: string;
    qosPolicy?: QosPolicy;
    state?: VrfStateEnum;
    vlanAttachments?: VlanAttachment[];
}
