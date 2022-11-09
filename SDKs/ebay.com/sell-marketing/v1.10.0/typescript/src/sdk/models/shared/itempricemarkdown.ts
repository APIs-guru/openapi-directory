import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SelectedInventoryDiscount } from "./selectedinventorydiscount";


// ItemPriceMarkdown
/** 
 * This type defines the fields used to describe an item price markdown promotion.
**/
export class ItemPriceMarkdown extends SpeakeasyBase {
  @Metadata({ data: "json, name=applyFreeShipping" })
  applyFreeShipping?: boolean;

  @Metadata({ data: "json, name=autoSelectFutureInventory" })
  autoSelectFutureInventory?: boolean;

  @Metadata({ data: "json, name=blockPriceIncreaseInItemRevision" })
  blockPriceIncreaseInItemRevision?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=priority" })
  priority?: string;

  @Metadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @Metadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @Metadata({ data: "json, name=selectedInventoryDiscounts", elemType: shared.SelectedInventoryDiscount })
  selectedInventoryDiscounts?: SelectedInventoryDiscount[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}
