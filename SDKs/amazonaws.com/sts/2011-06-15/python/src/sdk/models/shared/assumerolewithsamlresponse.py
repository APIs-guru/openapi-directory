from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class AssumeRoleWithSamlResponse:
    r"""AssumeRoleWithSamlResponse
    Contains the response to a successful <a>AssumeRoleWithSAML</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    assumed_role_user: Optional[AssumedRoleUser] = field(default=None)
    audience: Optional[str] = field(default=None)
    credentials: Optional[Credentials] = field(default=None)
    issuer: Optional[str] = field(default=None)
    name_qualifier: Optional[str] = field(default=None)
    packed_policy_size: Optional[int] = field(default=None)
    source_identity: Optional[str] = field(default=None)
    subject: Optional[str] = field(default=None)
    subject_type: Optional[str] = field(default=None)
    
