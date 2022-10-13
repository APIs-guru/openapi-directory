from dataclasses import dataclass, field
from typing import Enum

class BoardSortOrderEnum(str, Enum):
    DATE_LAST_UPDATED_DESCENDING = "date_last_updated_descending"
    DATE_LAST_UPDATED_ASCENDING = "date_last_updated_ascending"
    NAME_ASCENDING = "name_ascending"
    NAME_DECENDING = "name_decending"

