from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Onev21kubernetes1registryPostRequestBodyContentApplication1jsonSchema:
    cluster_uuids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cluster_uuids' }})
    
