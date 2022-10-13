from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metadata
from . import header
from . import record
from . import error


@dataclass_json
@dataclass
class Report:
    dimension_metadata: Optional[List[metadata.Metadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionMetadata' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    header: Optional[header.Header] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    last_updated_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedDate' }})
    records: Optional[List[record.Record]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    warnings: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'warnings' }})
    
