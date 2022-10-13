from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleSheetsOptions:
    range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    skip_leading_rows: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skipLeadingRows' }})
    
