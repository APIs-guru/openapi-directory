from dataclasses import dataclass, field
from typing import Enum

class OpsItemStatusEnum(str, Enum):
    OPEN = "Open"
    IN_PROGRESS = "InProgress"
    RESOLVED = "Resolved"
    PENDING = "Pending"
    TIMED_OUT = "TimedOut"
    CANCELLING = "Cancelling"
    CANCELLED = "Cancelled"
    FAILED = "Failed"
    COMPLETED_WITH_SUCCESS = "CompletedWithSuccess"
    COMPLETED_WITH_FAILURE = "CompletedWithFailure"
    SCHEDULED = "Scheduled"
    RUNBOOK_IN_PROGRESS = "RunbookInProgress"
    PENDING_CHANGE_CALENDAR_OVERRIDE = "PendingChangeCalendarOverride"
    CHANGE_CALENDAR_OVERRIDE_APPROVED = "ChangeCalendarOverrideApproved"
    CHANGE_CALENDAR_OVERRIDE_REJECTED = "ChangeCalendarOverrideRejected"
    PENDING_APPROVAL = "PendingApproval"
    APPROVED = "Approved"
    REJECTED = "Rejected"
    CLOSED = "Closed"

