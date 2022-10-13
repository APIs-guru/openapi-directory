from dataclasses import dataclass, field
from typing import Enum

class DomainEnum(str, Enum):
    S3 = "S3"
    EFS = "EFS"

