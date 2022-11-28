from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Event:
    date_: Optional[datetime] = field(default=None)
    event_categories: Optional[List[str]] = field(default=None)
    message: Optional[str] = field(default=None)
    source_identifier: Optional[str] = field(default=None)
    source_type: Optional[SourceTypeEnum] = field(default=None)
    
