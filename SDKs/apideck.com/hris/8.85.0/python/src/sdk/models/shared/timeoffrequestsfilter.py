from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum

class TimeOffRequestsFilterTimeOffRequestStatusEnum(str, Enum):
    REQUESTED = "requested"
    APPROVED = "approved"
    DECLINED = "declined"
    CANCELLED = "cancelled"
    DELETED = "deleted"
    OTHER = "other"


@dataclass
class TimeOffRequestsFilter:
    employee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'employee_id' }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date' }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date' }})
    time_off_request_status: Optional[TimeOffRequestsFilterTimeOffRequestStatusEnum] = field(default=None, metadata={'query_param': { 'field_name': 'time_off_request_status' }})
    
