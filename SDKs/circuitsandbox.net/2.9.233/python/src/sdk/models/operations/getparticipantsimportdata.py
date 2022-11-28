from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetParticipantsImportDataPathParams:
    space_id: str = field(metadata={'path_param': { 'field_name': 'spaceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetParticipantsImportDataSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetParticipantsImportDataRequest:
    path_params: GetParticipantsImportDataPathParams = field()
    security: GetParticipantsImportDataSecurity = field()
    

@dataclass
class GetParticipantsImportDataResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participants_import_data_result: Optional[Any] = field(default=None)
    
