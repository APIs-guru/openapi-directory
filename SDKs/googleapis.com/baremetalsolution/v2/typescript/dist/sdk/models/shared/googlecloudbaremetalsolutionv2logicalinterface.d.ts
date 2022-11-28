import { SpeakeasyBase } from "../../../internal/utils";
import { LogicalNetworkInterface } from "./logicalnetworkinterface";
/**
 * Each logical interface represents a logical abstraction of the underlying physical interface (for eg. bond, nic) of the instance. Each logical interface can effectively map to multiple network-IP pairs and still be mapped to one underlying physical interface.
**/
export declare class GoogleCloudBaremetalsolutionV2LogicalInterface extends SpeakeasyBase {
    interfaceIndex?: number;
    logicalNetworkInterfaces?: LogicalNetworkInterface[];
    name?: string;
}
