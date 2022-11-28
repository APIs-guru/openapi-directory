from dataclasses import dataclass, field
from enum import Enum

class TrainingJobSortByOptionsEnum(str, Enum):
    NAME = "Name"
    CREATION_TIME = "CreationTime"
    STATUS = "Status"
    FINAL_OBJECTIVE_METRIC_VALUE = "FinalObjectiveMetricValue"

