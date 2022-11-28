from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesEntriesPutPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesEntriesPutRequest:
    path_params: SalesEntriesPutPathParams = field()
    request: shared.SalesEntryDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesEntriesPutResponse:
    content_type: str = field()
    status_code: int = field()
    sales_entries_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
