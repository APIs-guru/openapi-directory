from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeneratedAssetPackSlice:
    download_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloadId' }})
    module_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'moduleName' }})
    slice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sliceId' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
