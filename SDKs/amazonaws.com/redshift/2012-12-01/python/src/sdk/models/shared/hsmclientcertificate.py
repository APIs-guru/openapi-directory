from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class HsmClientCertificate:
    r"""HsmClientCertificate
    Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
    """
    
    hsm_client_certificate_identifier: Optional[str] = field(default=None)
    hsm_client_certificate_public_key: Optional[str] = field(default=None)
    tags: Optional[List[Tag]] = field(default=None)
    
