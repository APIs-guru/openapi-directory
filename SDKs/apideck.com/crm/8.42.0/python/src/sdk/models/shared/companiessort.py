from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class CompaniesSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"


@dataclass
class CompaniesSort:
    by: Optional[CompaniesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
