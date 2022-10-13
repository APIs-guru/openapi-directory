from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metadatavalue


@dataclass_json
@dataclass
class GetOpsMetadataResult:
    metadata: Optional[dict[str, metadatavalue.MetadataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    
