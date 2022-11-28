import { SpeakeasyBase } from "../../../internal/utils";
import { ReservedNodeOffering } from "./reservednodeoffering";
export declare class GetReservedNodeExchangeOfferingsOutputMessage extends SpeakeasyBase {
    marker?: string;
    reservedNodeOfferings?: ReservedNodeOffering[];
}
