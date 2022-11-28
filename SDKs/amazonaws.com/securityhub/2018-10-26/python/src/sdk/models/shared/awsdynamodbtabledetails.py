from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsDynamoDbTableDetails:
    r"""AwsDynamoDbTableDetails
    Provides details about a DynamoDB table.
    """
    
    attribute_definitions: Optional[List[AwsDynamoDbTableAttributeDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttributeDefinitions') }})
    billing_mode_summary: Optional[AwsDynamoDbTableBillingModeSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BillingModeSummary') }})
    creation_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDateTime') }})
    global_secondary_indexes: Optional[List[AwsDynamoDbTableGlobalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalSecondaryIndexes') }})
    global_table_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GlobalTableVersion') }})
    item_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ItemCount') }})
    key_schema: Optional[List[AwsDynamoDbTableKeySchema]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeySchema') }})
    latest_stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamArn') }})
    latest_stream_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestStreamLabel') }})
    local_secondary_indexes: Optional[List[AwsDynamoDbTableLocalSecondaryIndex]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LocalSecondaryIndexes') }})
    provisioned_throughput: Optional[AwsDynamoDbTableProvisionedThroughput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ProvisionedThroughput') }})
    replicas: Optional[List[AwsDynamoDbTableReplica]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Replicas') }})
    restore_summary: Optional[AwsDynamoDbTableRestoreSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestoreSummary') }})
    sse_description: Optional[AwsDynamoDbTableSseDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SseDescription') }})
    stream_specification: Optional[AwsDynamoDbTableStreamSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamSpecification') }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableId') }})
    table_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableName') }})
    table_size_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableSizeBytes') }})
    table_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TableStatus') }})
    
