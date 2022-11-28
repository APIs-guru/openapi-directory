from dataclasses import dataclass, field
from enum import Enum

class ActorTypeEnum(str, Enum):
    PERSON = "Person"
    APPLICATION = "Application"
    GROUP = "Group"
    SERVICE = "Service"
    ORGANIZATION = "Organization"

