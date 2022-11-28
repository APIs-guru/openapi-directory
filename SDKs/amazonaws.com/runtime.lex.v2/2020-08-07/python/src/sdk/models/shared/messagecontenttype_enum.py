from dataclasses import dataclass, field
from enum import Enum

class MessageContentTypeEnum(str, Enum):
    CUSTOM_PAYLOAD = "CustomPayload"
    IMAGE_RESPONSE_CARD = "ImageResponseCard"
    PLAIN_TEXT = "PlainText"
    SSML = "SSML"

