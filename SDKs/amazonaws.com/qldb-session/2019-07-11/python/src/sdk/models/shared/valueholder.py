from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ValueHolder:
    ion_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IonBinary' }})
    ion_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IonText' }})
    
