from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class HistoryItemTypeEnum(str, Enum):
    CONFIGURATION_UPDATE = "ConfigurationUpdate"
    STATE_UPDATE = "StateUpdate"
    ACTION = "Action"

