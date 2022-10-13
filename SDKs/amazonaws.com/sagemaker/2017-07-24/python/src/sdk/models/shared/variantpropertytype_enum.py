from dataclasses import dataclass, field
from typing import Enum

class VariantPropertyTypeEnum(str, Enum):
    DESIRED_INSTANCE_COUNT = "DesiredInstanceCount"
    DESIRED_WEIGHT = "DesiredWeight"
    DATA_CAPTURE_CONFIG = "DataCaptureConfig"

