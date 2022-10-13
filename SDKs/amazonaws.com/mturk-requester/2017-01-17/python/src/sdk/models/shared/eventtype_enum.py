from dataclasses import dataclass, field
from typing import Enum

class EventTypeEnum(str, Enum):
    ASSIGNMENT_ACCEPTED = "AssignmentAccepted"
    ASSIGNMENT_ABANDONED = "AssignmentAbandoned"
    ASSIGNMENT_RETURNED = "AssignmentReturned"
    ASSIGNMENT_SUBMITTED = "AssignmentSubmitted"
    ASSIGNMENT_REJECTED = "AssignmentRejected"
    ASSIGNMENT_APPROVED = "AssignmentApproved"
    HIT_CREATED = "HITCreated"
    HIT_EXPIRED = "HITExpired"
    HIT_REVIEWABLE = "HITReviewable"
    HIT_EXTENDED = "HITExtended"
    HIT_DISPOSED = "HITDisposed"
    PING = "Ping"

