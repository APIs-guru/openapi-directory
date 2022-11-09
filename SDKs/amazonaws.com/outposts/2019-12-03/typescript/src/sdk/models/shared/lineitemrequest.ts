import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LineItemRequest
/** 
 * Information about a line item request.
**/
export class LineItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogItemId" })
  catalogItemId?: string;

  @Metadata({ data: "json, name=Quantity" })
  quantity?: number;
}
