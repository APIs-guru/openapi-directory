from dataclasses import dataclass, field
from typing import Enum

class ContentTypeEnum(str, Enum):
    PLAIN_TEXT = "PlainText"
    SSML = "SSML"
    CUSTOM_PAYLOAD = "CustomPayload"

