from dataclasses import dataclass, field
from enum import Enum

class ServiceTypeEnum(str, Enum):
    HTTP = "HTTP"
    DNS_HTTP = "DNS_HTTP"
    DNS = "DNS"

