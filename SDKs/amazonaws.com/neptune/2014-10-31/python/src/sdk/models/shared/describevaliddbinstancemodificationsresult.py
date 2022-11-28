from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class DescribeValidDbInstanceModificationsResult:
    valid_db_instance_modifications_message: Optional[ValidDbInstanceModificationsMessage] = field(default=None)
    
