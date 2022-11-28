from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class CreateHsmClientCertificateResult:
    hsm_client_certificate: Optional[HsmClientCertificate] = field(default=None)
    
