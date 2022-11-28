import { SpeakeasyBase } from "../../../internal/utils";
import { TaxAddress } from "./taxaddress";
import { TaxIdentifier } from "./taxidentifier";
/**
 * This type contains information about the order's buyer.
**/
export declare class Buyer extends SpeakeasyBase {
    taxAddress?: TaxAddress;
    taxIdentifier?: TaxIdentifier;
    username?: string;
}
