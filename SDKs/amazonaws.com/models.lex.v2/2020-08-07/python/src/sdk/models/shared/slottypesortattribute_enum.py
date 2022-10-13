from dataclasses import dataclass, field
from typing import Enum

class SlotTypeSortAttributeEnum(str, Enum):
    SLOT_TYPE_NAME = "SlotTypeName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

