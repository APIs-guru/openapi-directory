import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// DestinyResponsesDestinyVendorResponseCategories
/** 
 * Categories that the vendor has available, and references to the sales therein.
 * COMPONENT TYPE: VendorCategories
**/
export class DestinyResponsesDestinyVendorResponseCategories extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesVendorsDestinyVendorCategoriesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorResponseCurrencyLookups
/** 
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 * COMPONENT TYPE: CurrencyLookups
**/
export class DestinyResponsesDestinyVendorResponseCurrencyLookups extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsInventoryDestinyCurrenciesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorResponseItemComponents
/** 
 * Item components, keyed by the vendorItemIndex of the active sale items.
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
**/
export class DestinyResponsesDestinyVendorResponseItemComponents extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent;

  @SpeakeasyMetadata()
  objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;

  @SpeakeasyMetadata()
  perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;

  @SpeakeasyMetadata()
  plugObjectives?: DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent;

  @SpeakeasyMetadata()
  plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;

  @SpeakeasyMetadata()
  renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent;

  @SpeakeasyMetadata()
  reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent;

  @SpeakeasyMetadata()
  sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent;

  @SpeakeasyMetadata()
  stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent;

  @SpeakeasyMetadata()
  talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent;
}


// DestinyResponsesDestinyVendorResponseSales
/** 
 * Sales, keyed by the vendorItemIndex of the item being sold.
 * COMPONENT TYPE: VendorSales
**/
export class DestinyResponsesDestinyVendorResponseSales extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DestinyEntitiesVendorsDestinyVendorSaleItemComponent })
  data?: Map<string, DestinyEntitiesVendorsDestinyVendorSaleItemComponent>;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorResponseStringVariables
/** 
 * A map of string variable values by hash for this character context.
 * COMPONENT TYPE: StringVariables
**/
export class DestinyResponsesDestinyVendorResponseStringVariables extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorResponseVendor
/** 
 * The base properties of the vendor.
 * COMPONENT TYPE: Vendors
**/
export class DestinyResponsesDestinyVendorResponseVendor extends SpeakeasyBase {
  @SpeakeasyMetadata()
  data?: DestinyEntitiesVendorsDestinyVendorComponent;

  @SpeakeasyMetadata()
  disabled?: boolean;

  @SpeakeasyMetadata()
  privacy?: number;
}


// DestinyResponsesDestinyVendorResponse
/** 
 * A response containing all of the components for a vendor.
**/
export class DestinyResponsesDestinyVendorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  categories?: DestinyResponsesDestinyVendorResponseCategories;

  @SpeakeasyMetadata()
  currencyLookups?: DestinyResponsesDestinyVendorResponseCurrencyLookups;

  @SpeakeasyMetadata()
  itemComponents?: DestinyResponsesDestinyVendorResponseItemComponents;

  @SpeakeasyMetadata()
  sales?: DestinyResponsesDestinyVendorResponseSales;

  @SpeakeasyMetadata()
  stringVariables?: DestinyResponsesDestinyVendorResponseStringVariables;

  @SpeakeasyMetadata()
  vendor?: DestinyResponsesDestinyVendorResponseVendor;
}
