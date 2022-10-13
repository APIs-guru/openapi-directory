from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetrelationshipsummary


@dataclass_json
@dataclass
class ListAssetRelationshipsResponse:
    asset_relationship_summaries: List[assetrelationshipsummary.AssetRelationshipSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assetRelationshipSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
