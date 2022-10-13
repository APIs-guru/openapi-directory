from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsdynamodbtablereplicaglobalsecondaryindex
from . import awsdynamodbtableprovisionedthroughputoverride


@dataclass_json
@dataclass
class AwsDynamoDbTableReplica:
    global_secondary_indexes: Optional[List[awsdynamodbtablereplicaglobalsecondaryindex.AwsDynamoDbTableReplicaGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsMasterKeyId' }})
    provisioned_throughput_override: Optional[awsdynamodbtableprovisionedthroughputoverride.AwsDynamoDbTableProvisionedThroughputOverride] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughputOverride' }})
    region_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegionName' }})
    replica_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatus' }})
    replica_status_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReplicaStatusDescription' }})
    
