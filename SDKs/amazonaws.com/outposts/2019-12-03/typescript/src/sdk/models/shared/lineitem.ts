import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineItem
/** 
 * Information about a line item.
**/
export class LineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogItemId" })
  catalogItemId?: string;

  @Metadata({ data: "json, name=LineItemId" })
  lineItemId?: string;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
