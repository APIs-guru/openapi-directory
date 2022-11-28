import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent";
import { DestinyEntitiesVendorsDestinyVendorSaleItemComponent } from "./destinyentitiesvendorsdestinyvendorsaleitemcomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
/**
 * Categories that the vendor has available, and references to the sales therein.
 * COMPONENT TYPE: VendorCategories
**/
export declare class DestinyResponsesDestinyVendorResponseCategories extends SpeakeasyBase {
    data?: DestinyEntitiesVendorsDestinyVendorCategoriesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export declare class DestinyResponsesDestinyVendorResponseCurrencyLookups extends SpeakeasyBase {
    data?: DestinyComponentsInventoryDestinyCurrenciesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * Item components, keyed by the vendorItemIndex of the active sale items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export declare class DestinyResponsesDestinyVendorResponseItemComponents extends SpeakeasyBase {
    instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent;
    objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;
    plugObjectives?: DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent;
    reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent;
    sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent;
    stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent;
    talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent;
}
/**
 * Sales, keyed by the vendorItemIndex of the item being sold.
 * COMPONENT TYPE: VendorSales
**/
export declare class DestinyResponsesDestinyVendorResponseSales extends SpeakeasyBase {
    data?: Map<string, DestinyEntitiesVendorsDestinyVendorSaleItemComponent>;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
export declare class DestinyResponsesDestinyVendorResponseStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * The base properties of the vendor.
 * COMPONENT TYPE: Vendors
**/
export declare class DestinyResponsesDestinyVendorResponseVendor extends SpeakeasyBase {
    data?: DestinyEntitiesVendorsDestinyVendorComponent;
    disabled?: boolean;
    privacy?: number;
}
/**
 * A response containing all of the components for a vendor.
**/
export declare class DestinyResponsesDestinyVendorResponse extends SpeakeasyBase {
    categories?: DestinyResponsesDestinyVendorResponseCategories;
    currencyLookups?: DestinyResponsesDestinyVendorResponseCurrencyLookups;
    itemComponents?: DestinyResponsesDestinyVendorResponseItemComponents;
    sales?: DestinyResponsesDestinyVendorResponseSales;
    stringVariables?: DestinyResponsesDestinyVendorResponseStringVariables;
    vendor?: DestinyResponsesDestinyVendorResponseVendor;
}
