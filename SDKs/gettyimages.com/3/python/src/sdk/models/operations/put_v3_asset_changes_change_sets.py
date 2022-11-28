from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutV3AssetChangesChangeSetsQueryParams:
    batch_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'batch_size', 'style': 'form', 'explode': True }})
    channel_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'channel_id', 'style': 'form', 'explode': True }})
    

@dataclass
class PutV3AssetChangesChangeSetsRequest:
    query_params: PutV3AssetChangesChangeSetsQueryParams = field()
    

@dataclass
class PutV3AssetChangesChangeSetsResponse:
    content_type: str = field()
    status_code: int = field()
    asset_changes: Optional[shared.AssetChanges] = field(default=None)
    
