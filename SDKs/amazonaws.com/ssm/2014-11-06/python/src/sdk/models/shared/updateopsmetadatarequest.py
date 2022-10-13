from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadatavalue


@dataclass_json
@dataclass
class UpdateOpsMetadataRequest:
    keys_to_delete: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeysToDelete' }})
    metadata_to_update: Optional[dict[str, metadatavalue.MetadataValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetadataToUpdate' }})
    ops_metadata_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OpsMetadataArn' }})
    
