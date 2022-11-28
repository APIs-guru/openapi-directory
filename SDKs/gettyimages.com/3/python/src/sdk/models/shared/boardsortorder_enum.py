from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class BoardSortOrderEnum(str, Enum):
    DATE_LAST_UPDATED_DESCENDING = "date_last_updated_descending"
    DATE_LAST_UPDATED_ASCENDING = "date_last_updated_ascending"
    NAME_ASCENDING = "name_ascending"
    NAME_DECENDING = "name_decending"

