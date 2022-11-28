from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class SlotSortAttributeEnum(str, Enum):
    SLOT_NAME = "SlotName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

