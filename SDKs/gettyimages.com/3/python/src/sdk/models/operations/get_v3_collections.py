from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3CollectionsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3CollectionsRequest:
    headers: GetV3CollectionsHeaders = field()
    

@dataclass
class GetV3CollectionsResponse:
    content_type: str = field()
    status_code: int = field()
    collections_list: Optional[shared.CollectionsList] = field(default=None)
    
