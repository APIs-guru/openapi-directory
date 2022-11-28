from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class OrderableDbInstanceOptionsMessage:
    marker: Optional[str] = field(default=None)
    orderable_db_instance_options: Optional[List[OrderableDbInstanceOption]] = field(default=None)
    
