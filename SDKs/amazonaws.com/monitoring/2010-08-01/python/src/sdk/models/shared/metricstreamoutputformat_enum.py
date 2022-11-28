from dataclasses import dataclass, field
from enum import Enum

class MetricStreamOutputFormatEnum(str, Enum):
    JSON = "json"
    OPENTELEMETRY0_7 = "opentelemetry0.7"

