from dataclasses import dataclass, field
from typing import Enum

class StatusEnum(str, Enum):
    RETRIED = "retried"
    CANCELED = "canceled"
    INFRASTRUCTURE_FAIL = "infrastructure_fail"
    TIMEDOUT = "timedout"
    NOT_RUN = "not_run"
    RUNNING = "running"
    FAILED = "failed"
    QUEUED = "queued"
    SCHEDULED = "scheduled"
    NOT_RUNNING = "not_running"
    NO_TESTS = "no_tests"
    FIXED = "fixed"
    SUCCESS = "success"

