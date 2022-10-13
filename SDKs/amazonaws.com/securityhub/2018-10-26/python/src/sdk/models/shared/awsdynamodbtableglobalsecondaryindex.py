from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsdynamodbtablekeyschema
from . import awsdynamodbtableprojection
from . import awsdynamodbtableprovisionedthroughput


@dataclass_json
@dataclass
class AwsDynamoDbTableGlobalSecondaryIndex:
    backfilling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Backfilling' }})
    index_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexArn' }})
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    index_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexSizeBytes' }})
    index_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexStatus' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: Optional[List[awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    projection: Optional[awsdynamodbtableprojection.AwsDynamoDbTableProjection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Projection' }})
    provisioned_throughput: Optional[awsdynamodbtableprovisionedthroughput.AwsDynamoDbTableProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    
