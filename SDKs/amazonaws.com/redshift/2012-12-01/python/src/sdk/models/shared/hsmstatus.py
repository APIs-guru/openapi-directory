from dataclasses import dataclass, field
from typing import Optional


@dataclass
class HsmStatus:
    r"""HsmStatus
    Describes the status of changes to HSM settings.
    """
    
    hsm_client_certificate_identifier: Optional[str] = field(default=None)
    hsm_configuration_identifier: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
