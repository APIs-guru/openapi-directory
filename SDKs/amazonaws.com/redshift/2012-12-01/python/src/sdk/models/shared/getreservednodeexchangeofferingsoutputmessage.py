from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetReservedNodeExchangeOfferingsOutputMessage:
    marker: Optional[str] = field(default=None)
    reserved_node_offerings: Optional[List[ReservedNodeOffering]] = field(default=None)
    
