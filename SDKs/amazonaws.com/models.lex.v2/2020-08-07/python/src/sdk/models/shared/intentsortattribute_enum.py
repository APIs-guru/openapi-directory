from dataclasses import dataclass, field
from typing import Enum

class IntentSortAttributeEnum(str, Enum):
    INTENT_NAME = "IntentName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

