from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class ApisFilter:
    status: Optional[APIStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    
