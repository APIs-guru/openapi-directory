from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsmetadata


@dataclass_json
@dataclass
class ListOpsMetadataResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    ops_metadata_list: Optional[List[opsmetadata.OpsMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsMetadataList' }})
    
