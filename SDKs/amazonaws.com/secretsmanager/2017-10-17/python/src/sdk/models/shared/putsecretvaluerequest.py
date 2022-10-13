from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PutSecretValueRequest:
    client_request_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    secret_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretBinary' }})
    secret_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretId' }})
    secret_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecretString' }})
    version_stages: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VersionStages' }})
    
