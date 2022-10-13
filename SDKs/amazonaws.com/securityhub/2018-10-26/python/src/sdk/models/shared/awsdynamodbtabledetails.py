from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsdynamodbtableattributedefinition
from . import awsdynamodbtablebillingmodesummary
from . import awsdynamodbtableglobalsecondaryindex
from . import awsdynamodbtablekeyschema
from . import awsdynamodbtablelocalsecondaryindex
from . import awsdynamodbtableprovisionedthroughput
from . import awsdynamodbtablereplica
from . import awsdynamodbtablerestoresummary
from . import awsdynamodbtablessedescription
from . import awsdynamodbtablestreamspecification


@dataclass_json
@dataclass
class AwsDynamoDbTableDetails:
    attribute_definitions: Optional[List[awsdynamodbtableattributedefinition.AwsDynamoDbTableAttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttributeDefinitions' }})
    billing_mode_summary: Optional[awsdynamodbtablebillingmodesummary.AwsDynamoDbTableBillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillingModeSummary' }})
    creation_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDateTime' }})
    global_secondary_indexes: Optional[List[awsdynamodbtableglobalsecondaryindex.AwsDynamoDbTableGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalSecondaryIndexes' }})
    global_table_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalTableVersion' }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemCount' }})
    key_schema: Optional[List[awsdynamodbtablekeyschema.AwsDynamoDbTableKeySchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeySchema' }})
    latest_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestStreamArn' }})
    latest_stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestStreamLabel' }})
    local_secondary_indexes: Optional[List[awsdynamodbtablelocalsecondaryindex.AwsDynamoDbTableLocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalSecondaryIndexes' }})
    provisioned_throughput: Optional[awsdynamodbtableprovisionedthroughput.AwsDynamoDbTableProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedThroughput' }})
    replicas: Optional[List[awsdynamodbtablereplica.AwsDynamoDbTableReplica]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Replicas' }})
    restore_summary: Optional[awsdynamodbtablerestoresummary.AwsDynamoDbTableRestoreSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreSummary' }})
    sse_description: Optional[awsdynamodbtablessedescription.AwsDynamoDbTableSseDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SseDescription' }})
    stream_specification: Optional[awsdynamodbtablestreamspecification.AwsDynamoDbTableStreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamSpecification' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableId' }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableSizeBytes' }})
    table_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableStatus' }})
    
