from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auxiliarymessage


@dataclass_json
@dataclass
class Printer:
    auxiliary_messages: Optional[List[auxiliarymessage.AuxiliaryMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auxiliaryMessages' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    make_and_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'makeAndModel' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    use_driverless_config: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDriverlessConfig' }})
    
