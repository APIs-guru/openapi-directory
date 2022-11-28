from dataclasses import dataclass, field
from enum import Enum

class VariantPropertyTypeEnum(str, Enum):
    DESIRED_INSTANCE_COUNT = "DesiredInstanceCount"
    DESIRED_WEIGHT = "DesiredWeight"
    DATA_CAPTURE_CONFIG = "DataCaptureConfig"

