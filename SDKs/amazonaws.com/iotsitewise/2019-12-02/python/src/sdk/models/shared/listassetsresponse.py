from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetsummary


@dataclass_json
@dataclass
class ListAssetsResponse:
    asset_summaries: List[assetsummary.AssetSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
