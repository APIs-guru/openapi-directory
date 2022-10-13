from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import addonrequest


@dataclass_json
@dataclass
class EnableAddOnRequest:
    add_on_request: addonrequest.AddOnRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOnRequest' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
