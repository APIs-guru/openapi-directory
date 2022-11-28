from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsDynamoDbTableKeySchema:
    r"""AwsDynamoDbTableKeySchema
    A component of the key schema for the DynamoDB table, a global secondary index, or a local secondary index.
    """
    
    attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeName') }})
    key_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyType') }})
    
