from dataclasses import dataclass, field
from enum import Enum

class SslCertificateRequestValidationTypeEnum(str, Enum):
    DNS = "dns"
    FILE = "file"
    EMAIL = "email"

