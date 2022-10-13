from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GenerateRandomRequest:
    custom_key_store_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomKeyStoreId' }})
    number_of_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfBytes' }})
    
