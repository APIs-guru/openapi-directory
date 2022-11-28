from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyVendorResponseCategories:
    r"""DestinyResponsesDestinyVendorResponseCategories
    Categories that the vendor has available, and references to the sales therein.
    COMPONENT TYPE: VendorCategories
    """
    
    data: Optional[DestinyEntitiesVendorsDestinyVendorCategoriesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponseCurrencyLookups:
    r"""DestinyResponsesDestinyVendorResponseCurrencyLookups
    A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
    COMPONENT TYPE: CurrencyLookups
    """
    
    data: Optional[DestinyComponentsInventoryDestinyCurrenciesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponseItemComponents:
    r"""DestinyResponsesDestinyVendorResponseItemComponents
    Item components, keyed by the vendorItemIndex of the active sale items.
    COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
    """
    
    instances: Optional[DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent] = field(default=None)
    objectives: Optional[DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent] = field(default=None)
    perks: Optional[DictionaryComponentResponseOfint32AndDestinyItemPerksComponent] = field(default=None)
    plug_objectives: Optional[DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent] = field(default=None)
    plug_states: Optional[DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent] = field(default=None)
    render_data: Optional[DictionaryComponentResponseOfint32AndDestinyItemRenderComponent] = field(default=None)
    reusable_plugs: Optional[DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent] = field(default=None)
    sockets: Optional[DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent] = field(default=None)
    stats: Optional[DictionaryComponentResponseOfint32AndDestinyItemStatsComponent] = field(default=None)
    talent_grids: Optional[DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponseSales:
    r"""DestinyResponsesDestinyVendorResponseSales
    Sales, keyed by the vendorItemIndex of the item being sold.
    COMPONENT TYPE: VendorSales
    """
    
    data: Optional[dict[str, DestinyEntitiesVendorsDestinyVendorSaleItemComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponseStringVariables:
    r"""DestinyResponsesDestinyVendorResponseStringVariables
    A map of string variable values by hash for this character context.
    COMPONENT TYPE: StringVariables
    """
    
    data: Optional[DestinyComponentsStringVariablesDestinyStringVariablesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponseVendor:
    r"""DestinyResponsesDestinyVendorResponseVendor
    The base properties of the vendor.
    COMPONENT TYPE: Vendors
    """
    
    data: Optional[DestinyEntitiesVendorsDestinyVendorComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorResponse:
    r"""DestinyResponsesDestinyVendorResponse
    A response containing all of the components for a vendor.
    """
    
    categories: Optional[DestinyResponsesDestinyVendorResponseCategories] = field(default=None)
    currency_lookups: Optional[DestinyResponsesDestinyVendorResponseCurrencyLookups] = field(default=None)
    item_components: Optional[DestinyResponsesDestinyVendorResponseItemComponents] = field(default=None)
    sales: Optional[DestinyResponsesDestinyVendorResponseSales] = field(default=None)
    string_variables: Optional[DestinyResponsesDestinyVendorResponseStringVariables] = field(default=None)
    vendor: Optional[DestinyResponsesDestinyVendorResponseVendor] = field(default=None)
    
