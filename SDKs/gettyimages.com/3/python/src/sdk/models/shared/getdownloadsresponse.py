from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import historicaldownload


@dataclass_json
@dataclass
class GetDownloadsResponse:
    downloads: Optional[List[historicaldownload.HistoricalDownload]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downloads' }})
    result_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result_count' }})
    
