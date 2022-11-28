from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNfsSharesResponse:
    r"""ListNfsSharesResponse
    Response message containing the list of NFS shares.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    nfs_shares: Optional[List[NfsShare]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsShares') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
