from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyVendorsResponseCategories:
    r"""DestinyResponsesDestinyVendorsResponseCategories
    Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
    COMPONENT TYPE: VendorCategories
    """
    
    data: Optional[dict[str, DestinyEntitiesVendorsDestinyVendorCategoriesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponseCurrencyLookups:
    r"""DestinyResponsesDestinyVendorsResponseCurrencyLookups
    A \"lookup\" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
    COMPONENT TYPE: CurrencyLookups
    """
    
    data: Optional[DestinyComponentsInventoryDestinyCurrenciesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponseSales:
    r"""DestinyResponsesDestinyVendorsResponseSales
    Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
    Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
    COMPONENT TYPE: VendorSales
    """
    
    data: Optional[dict[str, DestinyResponsesPersonalDestinyVendorSaleItemSetComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponseStringVariables:
    r"""DestinyResponsesDestinyVendorsResponseStringVariables
    A map of string variable values by hash for this character context.
    COMPONENT TYPE: StringVariables
    """
    
    data: Optional[DestinyComponentsStringVariablesDestinyStringVariablesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponseVendorGroups:
    r"""DestinyResponsesDestinyVendorsResponseVendorGroups
    For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
    COMPONENT TYPE: Vendors
    """
    
    data: Optional[DestinyComponentsVendorsDestinyVendorGroupComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponseVendors:
    r"""DestinyResponsesDestinyVendorsResponseVendors
    The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
    COMPONENT TYPE: Vendors
    """
    
    data: Optional[dict[str, DestinyEntitiesVendorsDestinyVendorComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyVendorsResponse:
    r"""DestinyResponsesDestinyVendorsResponse
    A response containing all of the components for all requested vendors.
    """
    
    categories: Optional[DestinyResponsesDestinyVendorsResponseCategories] = field(default=None)
    currency_lookups: Optional[DestinyResponsesDestinyVendorsResponseCurrencyLookups] = field(default=None)
    item_components: Optional[dict[str, DestinyItemComponentSetOfint32]] = field(default=None)
    sales: Optional[DestinyResponsesDestinyVendorsResponseSales] = field(default=None)
    string_variables: Optional[DestinyResponsesDestinyVendorsResponseStringVariables] = field(default=None)
    vendor_groups: Optional[DestinyResponsesDestinyVendorsResponseVendorGroups] = field(default=None)
    vendors: Optional[DestinyResponsesDestinyVendorsResponseVendors] = field(default=None)
    
