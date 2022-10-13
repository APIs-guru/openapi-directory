from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LibreOfficeConvertRequest:
    file_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileName' }})
    inline_pdf: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlinePdf' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
