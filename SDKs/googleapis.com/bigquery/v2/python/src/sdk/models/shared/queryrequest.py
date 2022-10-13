from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectionproperty
from . import datasetreference
from . import queryparameter


@dataclass_json
@dataclass
class QueryRequest:
    connection_properties: Optional[List[connectionproperty.ConnectionProperty]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionProperties' }})
    create_session: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createSession' }})
    default_dataset: Optional[datasetreference.DatasetReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultDataset' }})
    dry_run: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dryRun' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    maximum_bytes_billed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximumBytesBilled' }})
    parameter_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameterMode' }})
    preserve_nulls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preserveNulls' }})
    query: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    query_parameters: Optional[List[queryparameter.QueryParameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParameters' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timeout_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutMs' }})
    use_legacy_sql: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLegacySql' }})
    use_query_cache: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useQueryCache' }})
    
