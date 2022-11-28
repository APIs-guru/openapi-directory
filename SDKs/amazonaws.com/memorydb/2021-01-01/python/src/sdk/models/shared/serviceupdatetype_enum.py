from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class ServiceUpdateTypeEnum(str, Enum):
    SECURITY_UPDATE = "security-update"

