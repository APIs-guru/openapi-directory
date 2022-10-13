from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dmlstatistics
from . import errorproto
from . import jobreference
from . import tablerow
from . import tableschema
from . import sessioninfo


@dataclass_json
@dataclass
class QueryResponse:
    cache_hit: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cacheHit' }})
    dml_stats: Optional[dmlstatistics.DmlStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dmlStats' }})
    errors: Optional[List[errorproto.ErrorProto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    job_complete: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobComplete' }})
    job_reference: Optional[jobreference.JobReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobReference' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    num_dml_affected_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numDmlAffectedRows' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    rows: Optional[List[tablerow.TableRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    schema: Optional[tableschema.TableSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schema' }})
    session_info: Optional[sessioninfo.SessionInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionInfo' }})
    total_bytes_processed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalBytesProcessed' }})
    total_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalRows' }})
    
