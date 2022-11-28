import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SelectedInventoryDiscount } from "./selectedinventorydiscount";



// ItemPriceMarkdown
/** 
 * This type defines the fields used to describe an item price markdown promotion.
**/
export class ItemPriceMarkdown extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applyFreeShipping" })
  applyFreeShipping?: boolean;

  @SpeakeasyMetadata({ data: "json, name=autoSelectFutureInventory" })
  autoSelectFutureInventory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=blockPriceIncreaseInItemRevision" })
  blockPriceIncreaseInItemRevision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceId" })
  marketplaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionImageUrl" })
  promotionImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=promotionStatus" })
  promotionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=selectedInventoryDiscounts", elemType: SelectedInventoryDiscount })
  selectedInventoryDiscounts?: SelectedInventoryDiscount[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}
