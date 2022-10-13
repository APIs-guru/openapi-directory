from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetDownloadHistoryResults:
    downloads: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloads' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
