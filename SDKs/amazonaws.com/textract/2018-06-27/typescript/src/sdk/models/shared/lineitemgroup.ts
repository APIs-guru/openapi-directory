import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LineItemFields } from "./lineitemfields";



// LineItemGroup
/** 
 * A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
**/
export class LineItemGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LineItemGroupIndex" })
  lineItemGroupIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=LineItems", elemType: LineItemFields })
  lineItems?: LineItemFields[];
}
