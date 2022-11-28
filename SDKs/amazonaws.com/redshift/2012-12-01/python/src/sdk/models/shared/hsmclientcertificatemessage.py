from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class HsmClientCertificateMessage:
    r"""HsmClientCertificateMessage
    <p/>
    """
    
    hsm_client_certificates: Optional[List[HsmClientCertificate]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
