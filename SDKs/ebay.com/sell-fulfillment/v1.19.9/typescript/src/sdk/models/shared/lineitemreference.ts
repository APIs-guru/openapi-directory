import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineItemReference
/** 
 * This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.
**/
export class LineItemReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=quantity" })
  quantity?: number;
}
