from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WeakCert:
    file_hash: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_hash' }})
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_name' }})
    sign_algorithm: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sign_algorithm' }})
    subject_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject_name' }})
    thumb_print: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumb_print' }})
    valid_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_from' }})
    valid_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid_to' }})
    
