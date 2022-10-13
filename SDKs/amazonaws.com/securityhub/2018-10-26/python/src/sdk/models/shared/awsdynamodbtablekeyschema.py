from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableKeySchema:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyType' }})
    
