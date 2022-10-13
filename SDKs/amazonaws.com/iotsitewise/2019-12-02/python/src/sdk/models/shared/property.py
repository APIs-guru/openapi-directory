from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import propertydatatype_enum
from . import propertynotification
from . import propertytype


@dataclass_json
@dataclass
class Property:
    alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    data_type: propertydatatype_enum.PropertyDataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataType' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification: Optional[propertynotification.PropertyNotification] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    type: Optional[propertytype.PropertyType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
