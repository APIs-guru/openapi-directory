from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addon
from . import servicepack


@dataclass_json
@dataclass
class AccountDetail:
    addons: Optional[List[addon.Addon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addons' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    servicepack: Optional[servicepack.Servicepack] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'servicepack' }})
    
