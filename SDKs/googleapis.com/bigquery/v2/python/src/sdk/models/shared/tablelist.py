from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clustering
from . import rangepartitioning
from . import tablereference
from . import timepartitioning


@dataclass_json
@dataclass
class TableListTablesView:
    use_legacy_sql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLegacySql' }})
    

@dataclass_json
@dataclass
class TableListTables:
    clustering: Optional[clustering.Clustering] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clustering' }})
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime' }})
    expiration_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationTime' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendlyName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    range_partitioning: Optional[rangepartitioning.RangePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangePartitioning' }})
    table_reference: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableReference' }})
    time_partitioning: Optional[timepartitioning.TimePartitioning] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timePartitioning' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    view: Optional[TableListTablesView] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'view' }})
    

@dataclass_json
@dataclass
class TableList:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tables: Optional[List[TableListTables]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tables' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    
