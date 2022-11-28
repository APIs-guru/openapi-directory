import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesVendorsDestinyVendorCategory } from "./destinyentitiesvendorsdestinyvendorcategory";
/**
 * A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list.
 * Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.
**/
export declare class DestinyEntitiesVendorsDestinyVendorCategoriesComponent extends SpeakeasyBase {
    categories?: DestinyEntitiesVendorsDestinyVendorCategory[];
}
