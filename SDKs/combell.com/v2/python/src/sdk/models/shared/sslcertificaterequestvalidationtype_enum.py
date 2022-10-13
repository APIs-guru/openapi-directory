from dataclasses import dataclass, field
from typing import Enum

class SslCertificateRequestValidationTypeEnum(str, Enum):
    DNS = "dns"
    FILE = "file"
    EMAIL = "email"

