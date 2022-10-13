from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import aliaslistentry


@dataclass_json
@dataclass
class ListAliasesResponse:
    aliases: Optional[List[aliaslistentry.AliasListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aliases' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Truncated' }})
    
