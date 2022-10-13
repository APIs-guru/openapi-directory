from dataclasses import dataclass, field
from typing import Enum,Optional
from . import sortdirection_enum

class CompaniesSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"


@dataclass
class CompaniesSort:
    by: Optional[CompaniesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[sortdirection_enum.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
