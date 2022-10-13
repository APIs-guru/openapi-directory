from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import relationaldatabasebundle


@dataclass_json
@dataclass
class GetRelationalDatabaseBundlesResult:
    bundles: Optional[List[relationaldatabasebundle.RelationalDatabaseBundle]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundles' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
