from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import useruserpublickey


@dataclass_json
@dataclass
class UserUserPublicKeyList:
    items: List[useruserpublickey.UserUserPublicKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
