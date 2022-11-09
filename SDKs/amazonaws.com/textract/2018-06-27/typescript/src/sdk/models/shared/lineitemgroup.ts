import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LineItemFields } from "./lineitemfields";


// LineItemGroup
/** 
 * A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
**/
export class LineItemGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=LineItemGroupIndex" })
  lineItemGroupIndex?: number;

  @Metadata({ data: "json, name=LineItems", elemType: shared.LineItemFields })
  lineItems?: LineItemFields[];
}
