from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateTokenRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    expiration_in_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationInDays' }})
    license_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    role_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArns' }})
    token_properties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenProperties' }})
    
