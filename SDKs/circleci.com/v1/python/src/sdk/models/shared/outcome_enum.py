from dataclasses import dataclass, field
from typing import Enum

class OutcomeEnum(str, Enum):
    CANCELED = "canceled"
    INFRASTRUCTURE_FAIL = "infrastructure_fail"
    TIMEDOUT = "timedout"
    FAILED = "failed"
    NO_TESTS = "no_tests"
    SUCCESS = "success"

