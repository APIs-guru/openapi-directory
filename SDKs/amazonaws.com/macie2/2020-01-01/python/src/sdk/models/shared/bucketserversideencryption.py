from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import type_enum


@dataclass_json
@dataclass
class BucketServerSideEncryption:
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsMasterKeyId' }})
    type: Optional[type_enum.TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
