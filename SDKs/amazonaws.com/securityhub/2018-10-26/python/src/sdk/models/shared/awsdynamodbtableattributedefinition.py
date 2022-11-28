from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableAttributeDefinition:
    r"""AwsDynamoDbTableAttributeDefinition
    Contains a definition of an attribute for the table.
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    attribute_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeType') }})
    
