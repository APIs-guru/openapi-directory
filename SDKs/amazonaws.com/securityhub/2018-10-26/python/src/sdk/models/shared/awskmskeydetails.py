from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsKmsKeyDetails:
    aws_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AWSAccountId' }})
    creation_date: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyId' }})
    key_manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyManager' }})
    key_rotation_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyRotationStatus' }})
    key_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyState' }})
    origin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Origin' }})
    
