from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import asset_usage


@dataclass_json
@dataclass
class ReportUsageBatchRequest:
    asset_usages: Optional[List[asset_usage.AssetUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_usages' }})
    
