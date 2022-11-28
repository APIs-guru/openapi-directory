import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyItemComponentSetOfint32 } from "./destinyitemcomponentsetofint32";
import { DestinyResponsesPersonalDestinyVendorSaleItemSetComponent } from "./destinyresponsespersonaldestinyvendorsaleitemsetcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";



// DestinyResponsesDestinyVendorsResponseCategories
/** 
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 * COMPONENT TYPE: VendorCategories
**/
export class DestinyResponsesDestinyVendorsResponseCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorCategoriesComponent })
  data?: Map<string, DestinyEntitiesVendorsDestinyVendorCategoriesComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponseCurrencyLookups
/** 
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export class DestinyResponsesDestinyVendorsResponseCurrencyLookups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsInventoryDestinyCurrenciesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponseSales
/** 
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
**/
export class DestinyResponsesDestinyVendorsResponseSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyResponsesPersonalDestinyVendorSaleItemSetComponent })
  data?: Map<string, DestinyResponsesPersonalDestinyVendorSaleItemSetComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponseStringVariables
/** 
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
export class DestinyResponsesDestinyVendorsResponseStringVariables extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponseVendorGroups
/** 
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 * COMPONENT TYPE: Vendors
**/
export class DestinyResponsesDestinyVendorsResponseVendorGroups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsVendorsDestinyVendorGroupComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponseVendors
/** 
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 * COMPONENT TYPE: Vendors
**/
export class DestinyResponsesDestinyVendorsResponseVendors extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorComponent })
  data?: Map<string, DestinyEntitiesVendorsDestinyVendorComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorsResponse
/** 
 * A response containing all of the components for all requested vendors.
**/
export class DestinyResponsesDestinyVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: DestinyResponsesDestinyVendorsResponseCategories;

  @SpeakeasyMetadata()
  currencyLookups?: DestinyResponsesDestinyVendorsResponseCurrencyLookups;

  @SpeakeasyMetadata({ elemType: DestinyItemComponentSetOfint32 })
  itemComponents?: Map<string, DestinyItemComponentSetOfint32>;

  @SpeakeasyMetadata()
  sales?: DestinyResponsesDestinyVendorsResponseSales;

  @SpeakeasyMetadata()
  stringVariables?: DestinyResponsesDestinyVendorsResponseStringVariables;

  @SpeakeasyMetadata()
  vendorGroups?: DestinyResponsesDestinyVendorsResponseVendorGroups;

  @SpeakeasyMetadata()
  vendors?: DestinyResponsesDestinyVendorsResponseVendors;
}
