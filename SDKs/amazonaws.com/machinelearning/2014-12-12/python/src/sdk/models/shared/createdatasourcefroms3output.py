from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateDataSourceFromS3Output:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceId' }})
    
