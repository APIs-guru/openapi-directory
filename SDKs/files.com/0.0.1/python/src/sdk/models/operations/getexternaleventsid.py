from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetExternalEventsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExternalEventsIDRequest:
    path_params: GetExternalEventsIDPathParams = field()
    

@dataclass
class GetExternalEventsIDResponse:
    content_type: str = field()
    status_code: int = field()
    external_event_entity: Optional[shared.ExternalEventEntity] = field(default=None)
    
