from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum

class UserProfileStatusEnum(str, Enum):
    DELETING = "Deleting"
    FAILED = "Failed"
    IN_SERVICE = "InService"
    PENDING = "Pending"
    UPDATING = "Updating"
    UPDATE_FAILED = "Update_Failed"
    DELETE_FAILED = "Delete_Failed"

