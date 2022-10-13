from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fileformatdescriptor


@dataclass_json
@dataclass
class S3SourceConfig:
    file_format_descriptor: Optional[fileformatdescriptor.FileFormatDescriptor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileFormatDescriptor' }})
    historical_data_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HistoricalDataPathList' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    templated_path_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TemplatedPathList' }})
    
