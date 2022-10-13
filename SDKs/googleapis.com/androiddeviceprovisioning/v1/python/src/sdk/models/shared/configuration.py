from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Configuration:
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyName' }})
    configuration_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationId' }})
    configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configurationName' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmail' }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPhone' }})
    custom_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMessage' }})
    dpc_extras: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpcExtras' }})
    dpc_resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dpcResourcePath' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDefault' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
