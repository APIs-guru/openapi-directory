from dataclasses import dataclass, field
from typing import Enum,List

class ContactListImportActionEnum(str, Enum):
    DELETE = "DELETE"
    PUT = "PUT"

