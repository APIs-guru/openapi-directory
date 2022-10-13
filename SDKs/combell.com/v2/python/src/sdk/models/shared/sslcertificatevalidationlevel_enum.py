from dataclasses import dataclass, field
from typing import Enum

class SslCertificateValidationLevelEnum(str, Enum):
    DOMAIN_VALIDATED = "domain_validated"
    ORGANIZATION_VALIDATED = "organization_validated"
    EXTENDED_VALIDATED = "extended_validated"

