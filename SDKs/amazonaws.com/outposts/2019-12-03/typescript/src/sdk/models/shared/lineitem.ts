import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineItem
/** 
 * Information about a line item.
**/
export class LineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogItemId" })
  catalogItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=LineItemId" })
  lineItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
