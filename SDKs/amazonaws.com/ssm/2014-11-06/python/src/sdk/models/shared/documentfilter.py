from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import documentfilterkey_enum


@dataclass_json
@dataclass
class DocumentFilter:
    key: documentfilterkey_enum.DocumentFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
