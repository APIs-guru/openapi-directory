from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class IntentSortAttributeEnum(str, Enum):
    INTENT_NAME = "IntentName"
    LAST_UPDATED_DATE_TIME = "LastUpdatedDateTime"

