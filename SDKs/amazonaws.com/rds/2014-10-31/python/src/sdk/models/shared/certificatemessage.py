from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class CertificateMessage:
    r"""CertificateMessage
    Data returned by the <b>DescribeCertificates</b> action.
    """
    
    certificates: Optional[List[Certificate]] = field(default=None)
    marker: Optional[str] = field(default=None)
    
