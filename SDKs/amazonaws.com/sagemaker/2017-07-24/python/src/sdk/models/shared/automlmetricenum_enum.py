from dataclasses import dataclass, field
from enum import Enum

class AutoMlMetricEnumEnum(str, Enum):
    ACCURACY = "Accuracy"
    MSE = "MSE"
    F1 = "F1"
    F1MACRO = "F1macro"
    AUC = "AUC"

