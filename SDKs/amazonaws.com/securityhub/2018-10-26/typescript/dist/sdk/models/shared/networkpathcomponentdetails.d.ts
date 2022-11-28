import { SpeakeasyBase } from "../../../internal/utils";
import { PortRange } from "./portrange";
/**
 * Information about the destination of the next component in the network path.
**/
export declare class NetworkPathComponentDetails extends SpeakeasyBase {
    address?: string[];
    portRanges?: PortRange[];
}
