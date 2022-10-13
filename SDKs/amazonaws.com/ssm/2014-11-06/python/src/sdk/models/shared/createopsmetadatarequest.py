from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadatavalue
from . import tag


@dataclass_json
@dataclass
class CreateOpsMetadataRequest:
    metadata: Optional[dict[str, metadatavalue.MetadataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Metadata' }})
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
