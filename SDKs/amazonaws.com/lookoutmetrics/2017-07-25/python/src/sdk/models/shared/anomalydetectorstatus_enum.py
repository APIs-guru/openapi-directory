from dataclasses import dataclass, field
from typing import Enum

class AnomalyDetectorStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    ACTIVATING = "ACTIVATING"
    DELETING = "DELETING"
    FAILED = "FAILED"
    INACTIVE = "INACTIVE"
    LEARNING = "LEARNING"
    BACK_TEST_ACTIVATING = "BACK_TEST_ACTIVATING"
    BACK_TEST_ACTIVE = "BACK_TEST_ACTIVE"
    BACK_TEST_COMPLETE = "BACK_TEST_COMPLETE"

