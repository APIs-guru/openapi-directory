from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from . import *


@dataclass
class ScheduledAction:
    r"""ScheduledAction
    Describes a scheduled action. You can use a scheduled action to trigger some Amazon Redshift API operations on a schedule. For information about which API operations can be scheduled, see <a>ScheduledActionType</a>. 
    """
    
    end_time: Optional[datetime] = field(default=None)
    iam_role: Optional[str] = field(default=None)
    next_invocations: Optional[List[datetime]] = field(default=None)
    schedule: Optional[str] = field(default=None)
    scheduled_action_description: Optional[str] = field(default=None)
    scheduled_action_name: Optional[str] = field(default=None)
    start_time: Optional[datetime] = field(default=None)
    state: Optional[ScheduledActionStateEnum] = field(default=None)
    target_action: Optional[ScheduledActionType] = field(default=None)
    
