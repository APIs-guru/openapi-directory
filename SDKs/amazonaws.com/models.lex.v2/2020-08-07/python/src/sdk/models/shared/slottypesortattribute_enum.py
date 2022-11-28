from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class SlotTypeSortAttributeEnum(str, Enum):
    SLOT_TYPE_NAME = "SlotTypeName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

