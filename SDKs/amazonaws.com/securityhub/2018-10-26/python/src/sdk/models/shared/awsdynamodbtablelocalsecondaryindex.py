from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsDynamoDbTableLocalSecondaryIndex:
    r"""AwsDynamoDbTableLocalSecondaryIndex
    Information about a local secondary index for a DynamoDB table.
    """
    
    index_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexArn') }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IndexName') }})
    key_schema: Optional[List[AwsDynamoDbTableKeySchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    projection: Optional[AwsDynamoDbTableProjection] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Projection') }})
    
