from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DestinyResponsesDestinyPublicVendorsResponseCategories:
    r"""DestinyResponsesDestinyPublicVendorsResponseCategories
    Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
    COMPONENT TYPE: VendorCategories
    """
    
    data: Optional[dict[str, DestinyEntitiesVendorsDestinyVendorCategoriesComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyPublicVendorsResponseSales:
    r"""DestinyResponsesDestinyPublicVendorsResponseSales
    Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
    Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
    COMPONENT TYPE: VendorSales
    """
    
    data: Optional[dict[str, DestinyResponsesPublicDestinyVendorSaleItemSetComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyPublicVendorsResponseStringVariables:
    r"""DestinyResponsesDestinyPublicVendorsResponseStringVariables
    A set of string variable values by hash for a public vendors context.
    COMPONENT TYPE: StringVariables
    """
    
    data: Optional[DestinyComponentsStringVariablesDestinyStringVariablesComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyPublicVendorsResponseVendorGroups:
    r"""DestinyResponsesDestinyPublicVendorsResponseVendorGroups
    For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
    COMPONENT TYPE: Vendors
    """
    
    data: Optional[DestinyComponentsVendorsDestinyVendorGroupComponent] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyPublicVendorsResponseVendors:
    r"""DestinyResponsesDestinyPublicVendorsResponseVendors
    The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
    COMPONENT TYPE: Vendors
    """
    
    data: Optional[dict[str, DestinyComponentsVendorsDestinyPublicVendorComponent]] = field(default=None)
    disabled: Optional[bool] = field(default=None)
    privacy: Optional[int] = field(default=None)
    

@dataclass
class DestinyResponsesDestinyPublicVendorsResponse:
    r"""DestinyResponsesDestinyPublicVendorsResponse
    A response containing all valid components for the public Vendors endpoint.
     It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
     If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
    """
    
    categories: Optional[DestinyResponsesDestinyPublicVendorsResponseCategories] = field(default=None)
    sales: Optional[DestinyResponsesDestinyPublicVendorsResponseSales] = field(default=None)
    string_variables: Optional[DestinyResponsesDestinyPublicVendorsResponseStringVariables] = field(default=None)
    vendor_groups: Optional[DestinyResponsesDestinyPublicVendorsResponseVendorGroups] = field(default=None)
    vendors: Optional[DestinyResponsesDestinyPublicVendorsResponseVendors] = field(default=None)
    
