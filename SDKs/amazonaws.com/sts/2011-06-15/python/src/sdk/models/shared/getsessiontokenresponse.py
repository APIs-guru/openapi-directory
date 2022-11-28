from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class GetSessionTokenResponse:
    r"""GetSessionTokenResponse
    Contains the response to a successful <a>GetSessionToken</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests. 
    """
    
    credentials: Optional[Credentials] = field(default=None)
    
