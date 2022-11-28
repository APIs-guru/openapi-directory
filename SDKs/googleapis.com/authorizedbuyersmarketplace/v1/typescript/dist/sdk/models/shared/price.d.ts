import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
export declare enum PriceTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Cpm = "CPM",
    Cpd = "CPD"
}
/**
 * Represents a price and a pricing type for a deal.
**/
export declare class Price extends SpeakeasyBase {
    amount?: Money;
    type?: PriceTypeEnum;
}
