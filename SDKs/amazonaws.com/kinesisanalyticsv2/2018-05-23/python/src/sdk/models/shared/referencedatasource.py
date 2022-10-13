from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourceschema
from . import s3referencedatasource


@dataclass_json
@dataclass
class ReferenceDataSource:
    reference_schema: sourceschema.SourceSchema = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceSchema' }})
    s3_reference_data_source: Optional[s3referencedatasource.S3ReferenceDataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ReferenceDataSource' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
