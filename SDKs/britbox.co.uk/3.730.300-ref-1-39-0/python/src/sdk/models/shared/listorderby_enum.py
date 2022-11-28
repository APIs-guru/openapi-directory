from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ListOrderByEnum(str, Enum):
    A_Z = "a-z"
    RELEASE_YEAR = "release-year"
    DATE_ADDED = "date-added"

