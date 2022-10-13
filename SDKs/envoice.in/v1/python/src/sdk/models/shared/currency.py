from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Currency:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }, 'form': { 'field_name': 'Code' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }, 'form': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }, 'form': { 'field_name': 'Name' }})
    symbol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Symbol' }, 'form': { 'field_name': 'Symbol' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }, 'form': { 'field_name': 'Value' }})
    
