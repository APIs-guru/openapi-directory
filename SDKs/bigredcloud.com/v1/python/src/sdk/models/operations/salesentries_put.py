from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesEntriesPutPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SalesEntriesPutRequest:
    path_params: SalesEntriesPutPathParams = field(default=None)
    request: shared.SalesEntryDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesEntriesPutResponse:
    content_type: str = field(default=None)
    sales_entries_put_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
