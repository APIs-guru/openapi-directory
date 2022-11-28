from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class CompositeAlarm:
    r"""CompositeAlarm
    The details about a composite alarm.
    """
    
    actions_enabled: Optional[bool] = field(default=None)
    alarm_actions: Optional[List[str]] = field(default=None)
    alarm_arn: Optional[str] = field(default=None)
    alarm_configuration_updated_timestamp: Optional[datetime] = field(default=None)
    alarm_description: Optional[str] = field(default=None)
    alarm_name: Optional[str] = field(default=None)
    alarm_rule: Optional[str] = field(default=None)
    insufficient_data_actions: Optional[List[str]] = field(default=None)
    ok_actions: Optional[List[str]] = field(default=None)
    state_reason: Optional[str] = field(default=None)
    state_reason_data: Optional[str] = field(default=None)
    state_updated_timestamp: Optional[datetime] = field(default=None)
    state_value: Optional[StateValueEnum] = field(default=None)
    
