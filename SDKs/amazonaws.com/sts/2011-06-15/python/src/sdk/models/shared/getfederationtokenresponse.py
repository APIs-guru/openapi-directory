from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetFederationTokenResponse:
    r"""GetFederationTokenResponse
    Contains the response to a successful <a>GetFederationToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    credentials: Optional[Credentials] = field(default=None)
    federated_user: Optional[FederatedUser] = field(default=None)
    packed_policy_size: Optional[int] = field(default=None)
    
