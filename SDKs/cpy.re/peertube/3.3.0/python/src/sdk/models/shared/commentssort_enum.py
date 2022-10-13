from dataclasses import dataclass, field
from typing import Enum

class CommentsSortEnum(str, Enum):
    MINUS_CREATED_AT = "-createdAt"
    MINUS_TOTAL_REPLIES = "-totalReplies"

