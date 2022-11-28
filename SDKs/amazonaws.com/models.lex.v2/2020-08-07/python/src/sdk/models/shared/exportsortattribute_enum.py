from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ExportSortAttributeEnum(str, Enum):
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

