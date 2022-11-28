import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkPathComponentDetails } from "./networkpathcomponentdetails";
/**
 * Details about a network path component that occurs before or after the current component.
**/
export declare class NetworkHeader extends SpeakeasyBase {
    destination?: NetworkPathComponentDetails;
    protocol?: string;
    source?: NetworkPathComponentDetails;
}
