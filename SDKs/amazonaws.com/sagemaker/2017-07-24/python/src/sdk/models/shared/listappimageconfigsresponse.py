from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appimageconfigdetails


@dataclass_json
@dataclass
class ListAppImageConfigsResponse:
    app_image_configs: Optional[List[appimageconfigdetails.AppImageConfigDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AppImageConfigs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
