import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOffering } from "./reservednodeoffering";
/**
 * <p/>
**/
export declare class ReservedNodeOfferingsMessage extends SpeakeasyBase {
    marker?: string;
    reservedNodeOfferings?: ReservedNodeOffering[];
}
