from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class AccountAttributesMessage:
    r"""AccountAttributesMessage
    Data returned by the <b>DescribeAccountAttributes</b> action.
    """
    
    account_quotas: Optional[List[AccountQuota]] = field(default=None)
    
