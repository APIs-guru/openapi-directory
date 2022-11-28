from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ElasticIPStatus:
    r"""ElasticIPStatus
    Describes the status of the elastic IP (EIP) address.
    """
    
    elastic_ip: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
