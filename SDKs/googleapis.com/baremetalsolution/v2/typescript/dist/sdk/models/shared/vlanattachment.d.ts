import { SpeakeasyBase } from "../../../internal/utils";
import { QosPolicy } from "./qospolicy";
/**
 * VLAN attachment details.
**/
export declare class VlanAttachment extends SpeakeasyBase {
    id?: string;
    pairingKey?: string;
    peerIp?: string;
    peerVlanId?: string;
    qosPolicy?: QosPolicy;
    routerIp?: string;
}
