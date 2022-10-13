from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV3CollectionsHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3CollectionsRequest:
    headers: GetV3CollectionsHeaders = field(default=None)
    

@dataclass
class GetV3CollectionsResponse:
    collections_list: Optional[shared.CollectionsList] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
