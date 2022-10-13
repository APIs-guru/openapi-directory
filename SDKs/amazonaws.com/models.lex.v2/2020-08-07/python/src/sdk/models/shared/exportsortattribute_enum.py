from dataclasses import dataclass, field
from typing import Enum

class ExportSortAttributeEnum(str, Enum):
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

