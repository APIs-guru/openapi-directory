import { SpeakeasyBase } from "../../../internal/utils";
import { TlsPolicyEnum } from "./tlspolicyenum";
/**
 * Used to associate a configuration set with a dedicated IP pool.
**/
export declare class DeliveryOptions extends SpeakeasyBase {
    sendingPoolName?: string;
    tlsPolicy?: TlsPolicyEnum;
}
