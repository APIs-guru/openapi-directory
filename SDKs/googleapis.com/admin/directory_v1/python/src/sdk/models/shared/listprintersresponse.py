from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import printer


@dataclass_json
@dataclass
class ListPrintersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    printers: Optional[List[printer.Printer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printers' }})
    
