from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import bundledetails


@dataclass_json
@dataclass
class ListBundlesResult:
    bundle_list: Optional[List[bundledetails.BundleDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundleList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
