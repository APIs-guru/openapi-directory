from dataclasses import dataclass, field
from typing import Enum

class SslCertificateTypeEnum(str, Enum):
    STANDARD = "standard"
    MULTI_DOMAIN = "multi_domain"
    WILDCARD = "wildcard"

