from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class Event:
    r"""Event
     This data type is used as a response element in the <a>DescribeEvents</a> action.
    """
    
    date_: Optional[datetime] = field(default=None)
    event_categories: Optional[List[str]] = field(default=None)
    message: Optional[str] = field(default=None)
    source_arn: Optional[str] = field(default=None)
    source_identifier: Optional[str] = field(default=None)
    source_type: Optional[SourceTypeEnum] = field(default=None)
    
