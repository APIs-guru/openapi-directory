from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import transferable_enum


@dataclass_json
@dataclass
class DomainTransferability:
    transferable: Optional[transferable_enum.TransferableEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Transferable' }})
    
