from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from . import *


@dataclass
class UserAuthConfigInfo:
    r"""UserAuthConfigInfo
    Returns the details of authentication used by a proxy to log in as a specific database user.
    """
    
    auth_scheme: Optional[AuthSchemeEnum] = field(default=None)
    description: Optional[str] = field(default=None)
    iam_auth: Optional[IamAuthModeEnum] = field(default=None)
    secret_arn: Optional[str] = field(default=None)
    user_name: Optional[str] = field(default=None)
    
