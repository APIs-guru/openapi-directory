from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsdynamodbtableprovisionedthroughputoverride


@dataclass_json
@dataclass
class AwsDynamoDbTableReplicaGlobalSecondaryIndex:
    index_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IndexName' }})
    provisioned_throughput_override: Optional[awsdynamodbtableprovisionedthroughputoverride.AwsDynamoDbTableProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    
