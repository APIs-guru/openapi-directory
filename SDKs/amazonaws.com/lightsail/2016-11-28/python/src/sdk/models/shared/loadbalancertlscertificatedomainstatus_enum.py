from dataclasses import dataclass, field
from typing import Enum

class LoadBalancerTLSCertificateDomainStatusEnum(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"

