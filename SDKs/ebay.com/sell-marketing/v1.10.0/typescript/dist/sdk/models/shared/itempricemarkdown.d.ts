import { SpeakeasyBase } from "../../../internal/utils";
import { SelectedInventoryDiscount } from "./selectedinventorydiscount";
/**
 * This type defines the fields used to describe an item price markdown promotion.
**/
export declare class ItemPriceMarkdown extends SpeakeasyBase {
    applyFreeShipping?: boolean;
    autoSelectFutureInventory?: boolean;
    blockPriceIncreaseInItemRevision?: boolean;
    description?: string;
    endDate?: string;
    marketplaceId?: string;
    name?: string;
    priority?: string;
    promotionImageUrl?: string;
    promotionStatus?: string;
    selectedInventoryDiscounts?: SelectedInventoryDiscount[];
    startDate?: string;
}
