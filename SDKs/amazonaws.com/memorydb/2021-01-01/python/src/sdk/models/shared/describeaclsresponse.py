from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acl


@dataclass_json
@dataclass
class DescribeAcLsResponse:
    ac_ls: Optional[List[acl.ACL]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ACLs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
