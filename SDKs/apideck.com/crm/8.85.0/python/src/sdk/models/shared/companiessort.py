from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *

class CompaniesSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"


@dataclass
class CompaniesSort:
    by: Optional[CompaniesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
