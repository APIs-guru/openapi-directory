from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class OpportunitiesSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    TITLE = "title"
    WIN_PROBABILITY = "win_probability"
    MONETARY_AMOUNT = "monetary_amount"
    STATUS = "status"


@dataclass
class OpportunitiesSort:
    by: Optional[OpportunitiesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[shared.SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
