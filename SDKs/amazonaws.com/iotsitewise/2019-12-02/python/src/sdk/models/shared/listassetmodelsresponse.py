from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetmodelsummary


@dataclass_json
@dataclass
class ListAssetModelsResponse:
    asset_model_summaries: List[assetmodelsummary.AssetModelSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetModelSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
