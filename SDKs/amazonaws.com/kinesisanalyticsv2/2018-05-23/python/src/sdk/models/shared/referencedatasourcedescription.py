from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourceschema
from . import s3referencedatasourcedescription


@dataclass_json
@dataclass
class ReferenceDataSourceDescription:
    reference_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    reference_schema: Optional[sourceschema.SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceSchema' }})
    s3_reference_data_source_description: s3referencedatasourcedescription.S3ReferenceDataSourceDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ReferenceDataSourceDescription' }})
    table_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableName' }})
    
