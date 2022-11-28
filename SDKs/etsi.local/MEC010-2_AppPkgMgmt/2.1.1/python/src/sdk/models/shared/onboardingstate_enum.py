from dataclasses import dataclass, field
from enum import Enum

class OnboardingStateEnum(str, Enum):
    CREATED = "CREATED"
    UPLOADING = "UPLOADING"
    PROCESSING = "PROCESSING"
    ONBOARDED = "ONBOARDED"

