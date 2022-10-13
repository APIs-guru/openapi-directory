from dataclasses import dataclass, field
from typing import Enum

class AttachmentsSourceKeyEnum(str, Enum):
    SOURCE_URL = "SourceUrl"
    S3_FILE_URL = "S3FileUrl"
    ATTACHMENT_REFERENCE = "AttachmentReference"

