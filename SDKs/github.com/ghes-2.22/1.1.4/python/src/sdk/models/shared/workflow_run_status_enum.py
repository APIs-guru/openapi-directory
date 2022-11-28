from dataclasses import dataclass, field
from enum import Enum

class WorkflowRunStatusEnum(str, Enum):
    COMPLETED = "completed"
    ACTION_REQUIRED = "action_required"
    CANCELLED = "cancelled"
    FAILURE = "failure"
    NEUTRAL = "neutral"
    SKIPPED = "skipped"
    STALE = "stale"
    SUCCESS = "success"
    TIMED_OUT = "timed_out"
    IN_PROGRESS = "in_progress"
    QUEUED = "queued"
    REQUESTED = "requested"
    WAITING = "waiting"

