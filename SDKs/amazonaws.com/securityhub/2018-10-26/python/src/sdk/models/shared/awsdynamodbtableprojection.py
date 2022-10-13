from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableProjection:
    non_key_attributes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonKeyAttributes' }})
    projection_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProjectionType' }})
    
