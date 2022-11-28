from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCallerIdentityResponse:
    r"""GetCallerIdentityResponse
    Contains the response to a successful <a>GetCallerIdentity</a> request, including information about the entity making the request.
    """
    
    account: Optional[str] = field(default=None)
    arn: Optional[str] = field(default=None)
    user_id: Optional[str] = field(default=None)
    
