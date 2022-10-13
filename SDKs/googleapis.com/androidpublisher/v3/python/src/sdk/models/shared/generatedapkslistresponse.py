from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import generatedapkspersigningkey


@dataclass_json
@dataclass
class GeneratedApksListResponse:
    generated_apks: Optional[List[generatedapkspersigningkey.GeneratedApksPerSigningKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'generatedApks' }})
    
