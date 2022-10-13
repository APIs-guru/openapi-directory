from dataclasses import dataclass, field
from typing import Enum

class SecretScanningAlertResolutionEnum(str, Enum):
    FALSE_POSITIVE = "false_positive"
    WONT_FIX = "wont_fix"
    REVOKED = "revoked"
    USED_IN_TESTS = "used_in_tests"

