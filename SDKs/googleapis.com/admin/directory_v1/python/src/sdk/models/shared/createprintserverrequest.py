from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import printserver


@dataclass_json
@dataclass
class CreatePrintServerRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    print_server: Optional[printserver.PrintServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printServer' }})
    
