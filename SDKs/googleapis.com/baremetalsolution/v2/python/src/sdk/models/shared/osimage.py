from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servernetworktemplate


@dataclass_json
@dataclass
class OsImage:
    applicable_instance_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicableInstanceTypes' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    supported_network_templates: Optional[List[servernetworktemplate.ServerNetworkTemplate]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedNetworkTemplates' }})
    
