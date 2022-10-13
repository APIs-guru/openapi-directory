from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import engineattribute


@dataclass_json
@dataclass
class ExportServerEngineAttributeRequest:
    export_attribute_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExportAttributeName' }})
    input_attributes: Optional[List[engineattribute.EngineAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputAttributes' }})
    server_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerName' }})
    
