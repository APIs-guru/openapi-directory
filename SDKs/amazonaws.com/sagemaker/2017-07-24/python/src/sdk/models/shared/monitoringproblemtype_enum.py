from dataclasses import dataclass, field
from typing import Enum

class MonitoringProblemTypeEnum(str, Enum):
    BINARY_CLASSIFICATION = "BinaryClassification"
    MULTICLASS_CLASSIFICATION = "MulticlassClassification"
    REGRESSION = "Regression"

