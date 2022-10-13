from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TokenData:
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpirationTime' }})
    license_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LicenseArn' }})
    role_arns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArns' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    token_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenId' }})
    token_properties: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenProperties' }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenType' }})
    
