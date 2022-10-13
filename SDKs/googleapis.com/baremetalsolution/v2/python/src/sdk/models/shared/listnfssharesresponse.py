from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nfsshare


@dataclass_json
@dataclass
class ListNfsSharesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    nfs_shares: Optional[List[nfsshare.NfsShare]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nfsShares' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
