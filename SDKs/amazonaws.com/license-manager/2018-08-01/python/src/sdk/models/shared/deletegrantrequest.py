from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteGrantRequest:
    grant_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GrantArn' }})
    status_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatusReason' }})
    version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Version' }})
    
