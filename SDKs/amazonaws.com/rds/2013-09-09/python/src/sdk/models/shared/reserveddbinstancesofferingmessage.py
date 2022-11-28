from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class ReservedDbInstancesOfferingMessage:
    marker: Optional[str] = field(default=None)
    reserved_db_instances_offerings: Optional[List[ReservedDbInstancesOffering]] = field(default=None)
    
