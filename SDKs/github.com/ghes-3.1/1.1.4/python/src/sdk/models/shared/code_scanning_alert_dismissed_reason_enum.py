from dataclasses import dataclass, field
from typing import Enum

class CodeScanningAlertDismissedReasonEnum(str, Enum):
    MAP_DOLLAR_REF_NUMBER_COMPONENTS_SCHEMAS_SECRET_SCANNING_ALERT_RESOLUTION_ENUM_0_ = "map[$ref:#/components/schemas/secret-scanning-alert-resolution/enum/0]"
    FALSE_POSITIVE = "false positive"
    WON_T_FIX = "won't fix"
    USED_IN_TESTS = "used in tests"

