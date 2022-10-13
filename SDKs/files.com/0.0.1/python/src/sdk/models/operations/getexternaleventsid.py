from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetExternalEventsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetExternalEventsIDRequest:
    path_params: GetExternalEventsIDPathParams = field(default=None)
    

@dataclass
class GetExternalEventsIDResponse:
    content_type: str = field(default=None)
    external_event_entity: Optional[shared.ExternalEventEntity] = field(default=None)
    status_code: int = field(default=None)
    
