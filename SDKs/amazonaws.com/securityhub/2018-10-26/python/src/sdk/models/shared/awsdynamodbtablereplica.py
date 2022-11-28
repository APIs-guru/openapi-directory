from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsDynamoDbTableReplica:
    r"""AwsDynamoDbTableReplica
    Information about a replica of a DynamoDB table.
    """
    
    global_secondary_indexes: Optional[List[AwsDynamoDbTableReplicaGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsMasterKeyId') }})
    provisioned_throughput_override: Optional[AwsDynamoDbTableProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughputOverride') }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegionName') }})
    replica_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatus') }})
    replica_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplicaStatusDescription') }})
    
