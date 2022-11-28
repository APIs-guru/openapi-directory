import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyItemComponentSetOfint32 } from "./destinyitemcomponentsetofint32";
import { DestinyResponsesPersonalDestinyVendorSaleItemSetComponent } from "./destinyresponsespersonaldestinyvendorsaleitemsetcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
/**
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 * COMPONENT TYPE: VendorCategories
**/
export declare class DestinyResponsesDestinyVendorsResponseCategories extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesVendorsDestinyVendorCategoriesComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export declare class DestinyResponsesDestinyVendorsResponseCurrencyLookups extends SpeakeasyBase {
    data?: DestinyComponentsInventoryDestinyCurrenciesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
**/
export declare class DestinyResponsesDestinyVendorsResponseSales extends SpeakeasyBase {
    data?: Map<string, DestinyResponsesPersonalDestinyVendorSaleItemSetComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
export declare class DestinyResponsesDestinyVendorsResponseStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 * COMPONENT TYPE: Vendors
**/
export declare class DestinyResponsesDestinyVendorsResponseVendorGroups extends SpeakeasyBase {
    data?: DestinyComponentsVendorsDestinyVendorGroupComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 * COMPONENT TYPE: Vendors
**/
export declare class DestinyResponsesDestinyVendorsResponseVendors extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesVendorsDestinyVendorComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A response containing all of the components for all requested vendors.
**/
export declare class DestinyResponsesDestinyVendorsResponse extends SpeakeasyBase {
    categories?: DestinyResponsesDestinyVendorsResponseCategories;
    currencyLookups?: DestinyResponsesDestinyVendorsResponseCurrencyLookups;
    itemComponents?: Map<string, DestinyItemComponentSetOfint32>;
    sales?: DestinyResponsesDestinyVendorsResponseSales;
    stringVariables?: DestinyResponsesDestinyVendorsResponseStringVariables;
    vendorGroups?: DestinyResponsesDestinyVendorsResponseVendorGroups;
    vendors?: DestinyResponsesDestinyVendorsResponseVendors;
}
