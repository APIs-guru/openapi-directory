from dataclasses import dataclass, field
from typing import Enum

class UploadBehaviorEnum(str, Enum):
    UPLOAD_ON_TERMINATE = "UPLOAD_ON_TERMINATE"
    UPLOAD_ROLLING_AUTO_REMOVE = "UPLOAD_ROLLING_AUTO_REMOVE"

