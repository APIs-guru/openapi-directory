from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *

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
    direction: Optional[SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
