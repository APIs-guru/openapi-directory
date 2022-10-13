from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsdynamodbtablekeyschema
from . import awsdynamodbtableprojection


@dataclass_json
@dataclass
class AwsDynamoDbTableLocalSecondaryIndex:
    index_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexArn' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    key_schema: Optional[List[awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    projection: Optional[awsdynamodbtableprojection.AwsDynamoDbTableProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projection' }})
    
