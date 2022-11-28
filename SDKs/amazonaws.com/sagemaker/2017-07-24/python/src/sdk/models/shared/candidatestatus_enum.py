from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CandidateStatusEnum(str, Enum):
    COMPLETED = "Completed"
    IN_PROGRESS = "InProgress"
    FAILED = "Failed"
    STOPPED = "Stopped"
    STOPPING = "Stopping"

