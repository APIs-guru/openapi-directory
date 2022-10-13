from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssociateKmsKeyRequest:
    kms_key_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyId' }})
    log_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logGroupName' }})
    
