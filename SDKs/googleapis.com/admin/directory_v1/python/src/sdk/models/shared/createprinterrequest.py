from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import printer


@dataclass_json
@dataclass
class CreatePrinterRequest:
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    printer: Optional[printer.Printer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printer' }})
    
