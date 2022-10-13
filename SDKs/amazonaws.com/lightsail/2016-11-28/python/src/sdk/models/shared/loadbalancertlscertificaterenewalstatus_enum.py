from dataclasses import dataclass, field
from typing import Enum

class LoadBalancerTLSCertificateRenewalStatusEnum(str, Enum):
    PENDING_AUTO_RENEWAL = "PENDING_AUTO_RENEWAL"
    PENDING_VALIDATION = "PENDING_VALIDATION"
    SUCCESS = "SUCCESS"
    FAILED = "FAILED"

