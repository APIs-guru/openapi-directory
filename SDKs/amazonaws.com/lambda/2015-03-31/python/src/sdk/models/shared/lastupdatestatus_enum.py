from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class LastUpdateStatusEnum(str, Enum):
    SUCCESSFUL = "Successful"
    FAILED = "Failed"
    IN_PROGRESS = "InProgress"

