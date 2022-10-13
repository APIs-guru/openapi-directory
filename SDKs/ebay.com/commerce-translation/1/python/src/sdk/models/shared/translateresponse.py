from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import translation


@dataclass_json
@dataclass
class TranslateResponse:
    translations: Optional[List[translation.Translation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'translations' }})
    
