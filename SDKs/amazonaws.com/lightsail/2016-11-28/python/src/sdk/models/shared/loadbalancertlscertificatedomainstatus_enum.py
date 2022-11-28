from dataclasses import dataclass, field
from enum import Enum

class LoadBalancerTLSCertificateDomainStatusEnum(str, Enum):
    PENDING_VALIDATION = "PENDING_VALIDATION"
    FAILED = "FAILED"
    SUCCESS = "SUCCESS"

