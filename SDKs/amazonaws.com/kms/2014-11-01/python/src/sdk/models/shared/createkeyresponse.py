from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import keymetadata


@dataclass_json
@dataclass
class CreateKeyResponse:
    key_metadata: Optional[keymetadata.KeyMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyMetadata' }})
    
