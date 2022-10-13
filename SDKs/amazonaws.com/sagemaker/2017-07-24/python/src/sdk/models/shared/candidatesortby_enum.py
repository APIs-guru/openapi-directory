from dataclasses import dataclass, field
from typing import Enum

class CandidateSortByEnum(str, Enum):
    CREATION_TIME = "CreationTime"
    STATUS = "Status"
    FINAL_OBJECTIVE_METRIC_VALUE = "FinalObjectiveMetricValue"

