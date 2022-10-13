from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import filefilekeys
from . import useridfileiditem
from . import range
from . import useruserpublickey


@dataclass_json
@dataclass
class MissingKeysResponse:
    files: Optional[List[filefilekeys.FileFileKeys]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'files' }})
    items: Optional[List[useridfileiditem.UserIDFileIDItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    users: Optional[List[useruserpublickey.UserUserPublicKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
