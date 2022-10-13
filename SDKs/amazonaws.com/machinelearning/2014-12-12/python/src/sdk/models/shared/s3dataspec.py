from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3DataSpec:
    data_location_s3: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataLocationS3' }})
    data_rearrangement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataRearrangement' }})
    data_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchema' }})
    data_schema_location_s3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSchemaLocationS3' }})
    
