from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import layerversionslistitem


@dataclass_json
@dataclass
class ListLayerVersionsResponse:
    layer_versions: Optional[List[layerversionslistitem.LayerVersionsListItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerVersions' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
