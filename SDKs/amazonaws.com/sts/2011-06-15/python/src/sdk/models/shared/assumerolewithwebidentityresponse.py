from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssumeRoleWithWebIdentityResponse:
    r"""AssumeRoleWithWebIdentityResponse
    Contains the response to a successful <a>AssumeRoleWithWebIdentity</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    assumed_role_user: Optional[AssumedRoleUser] = field(default=None)
    audience: Optional[str] = field(default=None)
    credentials: Optional[Credentials] = field(default=None)
    packed_policy_size: Optional[int] = field(default=None)
    provider: Optional[str] = field(default=None)
    source_identity: Optional[str] = field(default=None)
    subject_from_web_identity_token: Optional[str] = field(default=None)
    
