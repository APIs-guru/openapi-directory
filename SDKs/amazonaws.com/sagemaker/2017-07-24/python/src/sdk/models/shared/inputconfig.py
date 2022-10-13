from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import framework_enum


@dataclass_json
@dataclass
class InputConfig:
    data_input_config: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataInputConfig' }})
    framework: framework_enum.FrameworkEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Framework' }})
    framework_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FrameworkVersion' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
