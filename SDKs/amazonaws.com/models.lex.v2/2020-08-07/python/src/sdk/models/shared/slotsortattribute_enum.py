from dataclasses import dataclass, field
from typing import Enum

class SlotSortAttributeEnum(str, Enum):
    SLOT_NAME = "SlotName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

