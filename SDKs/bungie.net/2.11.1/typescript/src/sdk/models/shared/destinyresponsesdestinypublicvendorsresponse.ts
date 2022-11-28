import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyResponsesPublicDestinyVendorSaleItemSetComponent } from "./destinyresponsespublicdestinyvendorsaleitemsetcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyComponentsVendorsDestinyPublicVendorComponent } from "./destinycomponentsvendorsdestinypublicvendorcomponent";



// DestinyResponsesDestinyPublicVendorsResponseCategories
/** 
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 * COMPONENT TYPE: VendorCategories
**/
export class DestinyResponsesDestinyPublicVendorsResponseCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorCategoriesComponent })
  data?: Map<string, DestinyEntitiesVendorsDestinyVendorCategoriesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyPublicVendorsResponseSales
/** 
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
**/
export class DestinyResponsesDestinyPublicVendorsResponseSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyResponsesPublicDestinyVendorSaleItemSetComponent })
  data?: Map<string, DestinyResponsesPublicDestinyVendorSaleItemSetComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyPublicVendorsResponseStringVariables
/** 
 * A set of string variable values by hash for a public vendors context.
 * COMPONENT TYPE: StringVariables
**/
export class DestinyResponsesDestinyPublicVendorsResponseStringVariables extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyPublicVendorsResponseVendorGroups
/** 
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 * COMPONENT TYPE: Vendors
**/
export class DestinyResponsesDestinyPublicVendorsResponseVendorGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsVendorsDestinyVendorGroupComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyPublicVendorsResponseVendors
/** 
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 * COMPONENT TYPE: Vendors
**/
export class DestinyResponsesDestinyPublicVendorsResponseVendors extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyComponentsVendorsDestinyPublicVendorComponent })
  data?: Map<string, DestinyComponentsVendorsDestinyPublicVendorComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyPublicVendorsResponse
/** 
 * A response containing all valid components for the public Vendors endpoint.
 *  It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
 *  If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
**/
export class DestinyResponsesDestinyPublicVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: DestinyResponsesDestinyPublicVendorsResponseCategories;

  @SpeakeasyMetadata()
  sales?: DestinyResponsesDestinyPublicVendorsResponseSales;

  @SpeakeasyMetadata()
  stringVariables?: DestinyResponsesDestinyPublicVendorsResponseStringVariables;

  @SpeakeasyMetadata()
  vendorGroups?: DestinyResponsesDestinyPublicVendorsResponseVendorGroups;

  @SpeakeasyMetadata()
  vendors?: DestinyResponsesDestinyPublicVendorsResponseVendors;
}
