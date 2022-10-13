from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import mode_enum
from . import runtime_enum


@dataclass_json
@dataclass
class FunctionConfiguration:
    code_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CodeSize' }})
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConfigurationId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionARN' }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    handler: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Handler' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    memory_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemorySize' }})
    mode: Optional[mode_enum.ModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mode' }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Role' }})
    runtime: Optional[runtime_enum.RuntimeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Runtime' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timeout' }})
    
