from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SalesEntriesPostRequest:
    request: shared.SalesEntryDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SalesEntriesPostResponse:
    content_type: str = field()
    status_code: int = field()
    sales_entries_post_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
