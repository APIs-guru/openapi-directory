from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *

class ContactsSortByEnum(str, Enum):
    CREATED_AT = "created_at"
    UPDATED_AT = "updated_at"
    NAME = "name"
    FIRST_NAME = "first_name"
    LAST_NAME = "last_name"
    EMAIL = "email"


@dataclass
class ContactsSort:
    by: Optional[ContactsSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'by' }})
    direction: Optional[SortDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction' }})
    
