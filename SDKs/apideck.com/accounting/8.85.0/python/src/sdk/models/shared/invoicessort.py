from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *

class InvoicesSortByEnum(str, Enum):
    UPDATED_AT = "updated_at"


@dataclass
class InvoicesSort:
    by: Optional[InvoicesSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
