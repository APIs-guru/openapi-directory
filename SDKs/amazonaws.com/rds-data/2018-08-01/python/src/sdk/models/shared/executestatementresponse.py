from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import columnmetadata
from . import field
from . import field


@dataclass_json
@dataclass
class ExecuteStatementResponse:
    column_metadata: Optional[List[columnmetadata.ColumnMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnMetadata' }})
    generated_fields: Optional[List[field.Field]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedFields' }})
    number_of_records_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numberOfRecordsUpdated' }})
    records: Optional[List[List[field.Field]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'records' }})
    
