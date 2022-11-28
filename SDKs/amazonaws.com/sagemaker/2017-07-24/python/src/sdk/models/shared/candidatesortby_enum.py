from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class CandidateSortByEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    STATUS = "Status"
    FINAL_OBJECTIVE_METRIC_VALUE = "FinalObjectiveMetricValue"

