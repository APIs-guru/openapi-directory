from dataclasses import dataclass, field
from enum import Enum

class ComparisonOperatorEnum(str, Enum):
    GREATER_THAN_OR_EQUAL_TO_THRESHOLD = "GreaterThanOrEqualToThreshold"
    GREATER_THAN_THRESHOLD = "GreaterThanThreshold"
    LESS_THAN_THRESHOLD = "LessThanThreshold"
    LESS_THAN_OR_EQUAL_TO_THRESHOLD = "LessThanOrEqualToThreshold"
    LESS_THAN_LOWER_OR_GREATER_THAN_UPPER_THRESHOLD = "LessThanLowerOrGreaterThanUpperThreshold"
    LESS_THAN_LOWER_THRESHOLD = "LessThanLowerThreshold"
    GREATER_THAN_UPPER_THRESHOLD = "GreaterThanUpperThreshold"

