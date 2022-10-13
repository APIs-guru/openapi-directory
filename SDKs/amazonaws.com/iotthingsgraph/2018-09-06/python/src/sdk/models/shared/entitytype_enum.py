from dataclasses import dataclass, field
from typing import Enum

class EntityTypeEnum(str, Enum):
    DEVICE = "DEVICE"
    SERVICE = "SERVICE"
    DEVICE_MODEL = "DEVICE_MODEL"
    CAPABILITY = "CAPABILITY"
    STATE = "STATE"
    ACTION = "ACTION"
    EVENT = "EVENT"
    PROPERTY = "PROPERTY"
    MAPPING = "MAPPING"
    ENUM = "ENUM"

