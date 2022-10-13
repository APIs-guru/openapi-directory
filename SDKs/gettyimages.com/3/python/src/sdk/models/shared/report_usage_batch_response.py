from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReportUsageBatchResponse:
    invalid_assets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invalid_assets' }})
    total_asset_usages_processed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_asset_usages_processed' }})
    
