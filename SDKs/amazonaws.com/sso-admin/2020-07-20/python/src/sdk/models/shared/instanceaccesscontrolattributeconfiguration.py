from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import accesscontrolattribute


@dataclass_json
@dataclass
class InstanceAccessControlAttributeConfiguration:
    access_control_attributes: List[accesscontrolattribute.AccessControlAttribute] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessControlAttributes' }})
    
