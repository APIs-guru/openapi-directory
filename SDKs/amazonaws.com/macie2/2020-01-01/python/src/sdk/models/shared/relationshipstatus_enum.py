from dataclasses import dataclass, field
from enum import Enum

class RelationshipStatusEnum(str, Enum):
    ENABLED = "Enabled"
    PAUSED = "Paused"
    INVITED = "Invited"
    CREATED = "Created"
    REMOVED = "Removed"
    RESIGNED = "Resigned"
    EMAIL_VERIFICATION_IN_PROGRESS = "EmailVerificationInProgress"
    EMAIL_VERIFICATION_FAILED = "EmailVerificationFailed"
    REGION_DISABLED = "RegionDisabled"
    ACCOUNT_SUSPENDED = "AccountSuspended"

