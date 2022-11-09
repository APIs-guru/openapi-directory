import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineItemReference
/** 
 * This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.
**/
export class LineItemReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=quantity" })
  quantity?: number;
}
