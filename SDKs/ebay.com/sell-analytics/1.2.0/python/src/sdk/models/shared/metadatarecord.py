from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import value
from . import value


@dataclass_json
@dataclass
class MetadataRecord:
    metadata_values: Optional[List[value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadataValues' }})
    value: Optional[value.Value] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
