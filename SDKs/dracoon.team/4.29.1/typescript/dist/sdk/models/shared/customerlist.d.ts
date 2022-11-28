import { SpeakeasyBase } from "../../../internal/utils";
import { Customer } from "./customer";
import { Range } from "./range";
/**
 * List of customers
**/
export declare class CustomerList extends SpeakeasyBase {
    items: Customer[];
    range: Range;
}
