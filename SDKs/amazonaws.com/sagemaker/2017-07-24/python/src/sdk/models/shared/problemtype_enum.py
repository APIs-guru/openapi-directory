from dataclasses import dataclass, field
from enum import Enum

class ProblemTypeEnum(str, Enum):
    BINARY_CLASSIFICATION = "BinaryClassification"
    MULTICLASS_CLASSIFICATION = "MulticlassClassification"
    REGRESSION = "Regression"

