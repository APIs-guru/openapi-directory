from dataclasses import dataclass, field
from typing import Enum

class ContentClassifierEnum(str, Enum):
    FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
    FREE_OF_ADULT_CONTENT = "FreeOfAdultContent"

