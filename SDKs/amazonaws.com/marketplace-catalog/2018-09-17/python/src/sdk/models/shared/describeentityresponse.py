from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeEntityResponse:
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Details' }})
    entity_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityArn' }})
    entity_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityIdentifier' }})
    entity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityType' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    
