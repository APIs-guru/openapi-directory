from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsDynamoDbTableAttributeDefinition:
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeName' }})
    attribute_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeType' }})
    
