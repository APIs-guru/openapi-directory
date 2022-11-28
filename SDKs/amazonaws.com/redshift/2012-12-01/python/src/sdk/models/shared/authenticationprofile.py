from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AuthenticationProfile:
    r"""AuthenticationProfile
    Describes an authentication profile.
    """
    
    authentication_profile_content: Optional[str] = field(default=None)
    authentication_profile_name: Optional[str] = field(default=None)
    
