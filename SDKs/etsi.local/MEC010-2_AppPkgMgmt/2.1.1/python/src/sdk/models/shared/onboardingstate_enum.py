from dataclasses import dataclass, field
from typing import Enum

class OnboardingStateEnum(str, Enum):
    CREATED = "CREATED"
    UPLOADING = "UPLOADING"
    PROCESSING = "PROCESSING"
    ONBOARDED = "ONBOARDED"

