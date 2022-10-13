from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adreference


@dataclass_json
@dataclass
class AdReferences:
    ads: Optional[List[adreference.AdReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ads' }})
    
