from dataclasses import dataclass, field
from enum import Enum

class NamespaceTypeEnum(str, Enum):
    DNS_PUBLIC = "DNS_PUBLIC"
    DNS_PRIVATE = "DNS_PRIVATE"
    HTTP = "HTTP"

