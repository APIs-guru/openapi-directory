from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sourceschema
from . import s3referencedatasourceupdate


@dataclass_json
@dataclass
class ReferenceDataSourceUpdate:
    reference_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    reference_schema_update: Optional[sourceschema.SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceSchemaUpdate' }})
    s3_reference_data_source_update: Optional[s3referencedatasourceupdate.S3ReferenceDataSourceUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3ReferenceDataSourceUpdate' }})
    table_name_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TableNameUpdate' }})
    
