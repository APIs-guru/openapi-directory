import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LineItemRequest
/** 
 * Information about a line item request.
**/
export class LineItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogItemId" })
  catalogItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Quantity" })
  quantity?: number;
}
