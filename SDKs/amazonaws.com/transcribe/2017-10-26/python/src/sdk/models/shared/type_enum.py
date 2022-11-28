from dataclasses import dataclass, field
from enum import Enum

class TypeEnum(str, Enum):
    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

