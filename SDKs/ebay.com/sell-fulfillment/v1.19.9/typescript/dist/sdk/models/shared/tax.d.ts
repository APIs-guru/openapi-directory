import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * This type contains information about any sales tax applied to a line item.
**/
export declare class Tax extends SpeakeasyBase {
    amount?: Amount;
    taxType?: string;
}
