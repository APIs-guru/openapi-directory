from dataclasses import dataclass, field
from typing import Enum,Optional
from . import sortdirection_enum

class LeadsSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"
    FIRST_NAME = "first_name"
    LAST_NAME = "last_name"
    EMAIL = "email"


@dataclass
class LeadsSort:
    by: Optional[LeadsSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[sortdirection_enum.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
