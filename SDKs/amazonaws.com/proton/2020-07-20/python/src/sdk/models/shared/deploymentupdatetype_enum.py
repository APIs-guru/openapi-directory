from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class DeploymentUpdateTypeEnum(str, Enum):
    NONE = "NONE"
    CURRENT_VERSION = "CURRENT_VERSION"
    MINOR_VERSION = "MINOR_VERSION"
    MAJOR_VERSION = "MAJOR_VERSION"

