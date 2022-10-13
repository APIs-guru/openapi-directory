from dataclasses import dataclass, field
from typing import Enum

class TypeEnum(str, Enum):
    CONVERSATION = "CONVERSATION"
    DICTATION = "DICTATION"

