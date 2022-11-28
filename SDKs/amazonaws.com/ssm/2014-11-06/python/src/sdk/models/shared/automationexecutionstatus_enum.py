from dataclasses import dataclass, field
from enum import Enum

class AutomationExecutionStatusEnum(str, Enum):
    PENDING = "Pending"
    IN_PROGRESS = "InProgress"
    WAITING = "Waiting"
    SUCCESS = "Success"
    TIMED_OUT = "TimedOut"
    CANCELLING = "Cancelling"
    CANCELLED = "Cancelled"
    FAILED = "Failed"
    PENDING_APPROVAL = "PendingApproval"
    APPROVED = "Approved"
    REJECTED = "Rejected"
    SCHEDULED = "Scheduled"
    RUNBOOK_IN_PROGRESS = "RunbookInProgress"
    PENDING_CHANGE_CALENDAR_OVERRIDE = "PendingChangeCalendarOverride"
    CHANGE_CALENDAR_OVERRIDE_APPROVED = "ChangeCalendarOverrideApproved"
    CHANGE_CALENDAR_OVERRIDE_REJECTED = "ChangeCalendarOverrideRejected"
    COMPLETED_WITH_SUCCESS = "CompletedWithSuccess"
    COMPLETED_WITH_FAILURE = "CompletedWithFailure"

