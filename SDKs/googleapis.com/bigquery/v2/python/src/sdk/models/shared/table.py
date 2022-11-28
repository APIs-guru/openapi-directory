from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Table:
    clone_definition: Optional[CloneDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloneDefinition') }})
    clustering: Optional[Clustering] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clustering') }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime') }})
    default_collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultCollation') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    encryption_configuration: Optional[EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfiguration') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationTime') }})
    external_data_configuration: Optional[ExternalDataConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDataConfiguration') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendlyName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModifiedTime') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    materialized_view: Optional[MaterializedViewDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('materializedView') }})
    max_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxStaleness') }})
    model: Optional[ModelDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    num_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numBytes') }})
    num_long_term_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numLongTermBytes') }})
    num_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numPhysicalBytes') }})
    num_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numRows') }})
    num_active_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_active_logical_bytes') }})
    num_active_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_active_physical_bytes') }})
    num_long_term_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_long_term_logical_bytes') }})
    num_long_term_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_long_term_physical_bytes') }})
    num_partitions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_partitions') }})
    num_time_travel_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_time_travel_physical_bytes') }})
    num_total_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_total_logical_bytes') }})
    num_total_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_total_physical_bytes') }})
    range_partitioning: Optional[RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangePartitioning') }})
    require_partition_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirePartitionFilter') }})
    schema: Optional[TableSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schema') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    snapshot_definition: Optional[SnapshotDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshotDefinition') }})
    streaming_buffer: Optional[Streamingbuffer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('streamingBuffer') }})
    table_reference: Optional[TableReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableReference') }})
    time_partitioning: Optional[TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timePartitioning') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    view: Optional[ViewDefinition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
