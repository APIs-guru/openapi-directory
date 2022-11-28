from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from . import *


@dataclass
class AlarmHistoryItem:
    r"""AlarmHistoryItem
    Represents the history of a specific alarm.
    """
    
    alarm_name: Optional[str] = field(default=None)
    alarm_type: Optional[AlarmTypeEnum] = field(default=None)
    history_data: Optional[str] = field(default=None)
    history_item_type: Optional[HistoryItemTypeEnum] = field(default=None)
    history_summary: Optional[str] = field(default=None)
    timestamp: Optional[datetime] = field(default=None)
    
