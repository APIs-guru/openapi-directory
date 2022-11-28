from dataclasses import dataclass, field
from enum import Enum

class ContentTypeEnum(str, Enum):
    PLAIN_TEXT = "PlainText"
    SSML = "SSML"
    CUSTOM_PAYLOAD = "CustomPayload"

