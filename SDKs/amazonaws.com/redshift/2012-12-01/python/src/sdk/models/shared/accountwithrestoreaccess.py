from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccountWithRestoreAccess:
    r"""AccountWithRestoreAccess
    Describes an Amazon Web Services account authorized to restore a snapshot.
    """
    
    account_alias: Optional[str] = field(default=None)
    account_id: Optional[str] = field(default=None)
    
