from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class PayrollsFilter:
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date' }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date' }})
    
