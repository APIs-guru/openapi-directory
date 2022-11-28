from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ServiceUpdateStatusEnum(str, Enum):
    AVAILABLE = "available"
    IN_PROGRESS = "in-progress"
    COMPLETE = "complete"
    SCHEDULED = "scheduled"

