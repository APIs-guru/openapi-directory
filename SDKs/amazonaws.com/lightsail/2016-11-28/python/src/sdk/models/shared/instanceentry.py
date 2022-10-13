from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import portinfosourcetype_enum


@dataclass_json
@dataclass
class InstanceEntry:
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    port_info_source: portinfosourcetype_enum.PortInfoSourceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'portInfoSource' }})
    source_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceName' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userData' }})
    
