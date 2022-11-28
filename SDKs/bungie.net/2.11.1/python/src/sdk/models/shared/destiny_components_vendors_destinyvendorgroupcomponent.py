from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class DestinyComponentsVendorsDestinyVendorGroupComponent:
    r"""DestinyComponentsVendorsDestinyVendorGroupComponent
    This component returns references to all of the Vendors in the response, grouped by categorizations that Bungie has deemed to be interesting, in the order in which both the groups and the vendors within that group should be rendered.
    """
    
    groups: Optional[List[DestinyComponentsVendorsDestinyVendorGroup]] = field(default=None)
    
