from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import domain


@dataclass_json
@dataclass
class CreateOrganizationRequest:
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Alias' }})
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    directory_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DirectoryId' }})
    domains: Optional[List[domain.Domain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Domains' }})
    enable_interoperability: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EnableInteroperability' }})
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    
