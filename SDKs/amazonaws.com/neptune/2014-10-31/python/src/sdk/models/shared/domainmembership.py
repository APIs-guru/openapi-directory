from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DomainMembership:
    r"""DomainMembership
    An Active Directory Domain membership record associated with a DB instance.
    """
    
    domain: Optional[str] = field(default=None)
    fqdn: Optional[str] = field(default=None)
    iam_role_name: Optional[str] = field(default=None)
    status: Optional[str] = field(default=None)
    
