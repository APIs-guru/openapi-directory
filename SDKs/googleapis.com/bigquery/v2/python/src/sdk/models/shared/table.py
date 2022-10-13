from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import clonedefinition
from . import clustering
from . import encryptionconfiguration
from . import externaldataconfiguration
from . import materializedviewdefinition
from . import modeldefinition
from . import rangepartitioning
from . import tableschema
from . import snapshotdefinition
from . import streamingbuffer
from . import tablereference
from . import timepartitioning
from . import viewdefinition


@dataclass_json
@dataclass
class Table:
    clone_definition: Optional[clonedefinition.CloneDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloneDefinition' }})
    clustering: Optional[clustering.Clustering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clustering' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    default_collation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultCollation' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    encryption_configuration: Optional[encryptionconfiguration.EncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfiguration' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    external_data_configuration: Optional[externaldataconfiguration.ExternalDataConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalDataConfiguration' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_modified_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModifiedTime' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    materialized_view: Optional[materializedviewdefinition.MaterializedViewDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'materializedView' }})
    max_staleness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxStaleness' }})
    model: Optional[modeldefinition.ModelDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    num_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numBytes' }})
    num_long_term_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numLongTermBytes' }})
    num_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numPhysicalBytes' }})
    num_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numRows' }})
    num_active_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_active_logical_bytes' }})
    num_active_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_active_physical_bytes' }})
    num_long_term_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_long_term_logical_bytes' }})
    num_long_term_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_long_term_physical_bytes' }})
    num_partitions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_partitions' }})
    num_time_travel_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_time_travel_physical_bytes' }})
    num_total_logical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_total_logical_bytes' }})
    num_total_physical_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'num_total_physical_bytes' }})
    range_partitioning: Optional[rangepartitioning.RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangePartitioning' }})
    require_partition_filter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requirePartitionFilter' }})
    schema: Optional[tableschema.TableSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    snapshot_definition: Optional[snapshotdefinition.SnapshotDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotDefinition' }})
    streaming_buffer: Optional[streamingbuffer.Streamingbuffer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamingBuffer' }})
    table_reference: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableReference' }})
    time_partitioning: Optional[timepartitioning.TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePartitioning' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    view: Optional[viewdefinition.ViewDefinition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    
