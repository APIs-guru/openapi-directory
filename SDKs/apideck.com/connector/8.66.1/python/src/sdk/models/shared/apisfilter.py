from dataclasses import dataclass, field
from typing import Enum,Optional
from . import apistatus_enum


@dataclass
class ApisFilter:
    status: Optional[apistatus_enum.APIStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'status' }})
    
