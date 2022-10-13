from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import printermodel


@dataclass_json
@dataclass
class ListPrinterModelsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    printer_models: Optional[List[printermodel.PrinterModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printerModels' }})
    
