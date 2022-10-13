from dataclasses import dataclass, field
from typing import Enum

class CodeScanningAlertDismissedReasonEnum(str, Enum):
    FALSE_POSITIVE = "false positive"
    WON_T_FIX = "won't fix"
    USED_IN_TESTS = "used in tests"

