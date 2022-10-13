from dataclasses import dataclass, field
from typing import Enum

class FolderNameEnum(str, Enum):
    INBOX = "INBOX"
    DELETED_ITEMS = "DELETED_ITEMS"
    SENT_ITEMS = "SENT_ITEMS"
    DRAFTS = "DRAFTS"
    JUNK_EMAIL = "JUNK_EMAIL"

