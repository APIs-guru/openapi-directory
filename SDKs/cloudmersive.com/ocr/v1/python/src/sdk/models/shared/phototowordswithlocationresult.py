from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ocrphototextelement


@dataclass_json
@dataclass
class PhotoToWordsWithLocationResult:
    diagnostic_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DiagnosticImage' }})
    successful: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successful' }})
    text_elements: Optional[List[ocrphototextelement.OcrPhotoTextElement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TextElements' }})
    
