from dataclasses import dataclass, field
from enum import Enum

class MessageFormatTypeEnum(str, Enum):
    PLAIN_TEXT = "PlainText"
    CUSTOM_PAYLOAD = "CustomPayload"
    SSML = "SSML"
    COMPOSITE = "Composite"

