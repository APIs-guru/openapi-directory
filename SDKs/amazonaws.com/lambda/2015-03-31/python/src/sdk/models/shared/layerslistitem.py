from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import layerversionslistitem


@dataclass_json
@dataclass
class LayersListItem:
    latest_matching_version: Optional[layerversionslistitem.LayerVersionsListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestMatchingVersion' }})
    layer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerArn' }})
    layer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerName' }})
    
