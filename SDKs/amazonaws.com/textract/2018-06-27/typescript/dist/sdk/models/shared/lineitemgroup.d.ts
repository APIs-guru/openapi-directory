import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemFields } from "./lineitemfields";
/**
 * A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
**/
export declare class LineItemGroup extends SpeakeasyBase {
    lineItemGroupIndex?: number;
    lineItems?: LineItemFields[];
}
