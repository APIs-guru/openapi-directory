from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetStatisticsIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetStatisticsIDRequest:
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    security: GetStatisticsIDSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetStatisticsID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetStatisticsID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass_json
@dataclass
class GetStatisticsID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_description' }})
    

@dataclass
class GetStatisticsIDResponse:
    content_type: str = field(default=None)
    get_statistics_id_400_application_json_object: Optional[GetStatisticsID400ApplicationJSON] = field(default=None)
    get_statistics_id_401_application_json_object: Optional[GetStatisticsID401ApplicationJSON] = field(default=None)
    get_statistics_id_500_application_json_object: Optional[GetStatisticsID500ApplicationJSON] = field(default=None)
    get_statistics_response: Optional[shared.GetStatisticsResponse] = field(default=None)
    status_code: int = field(default=None)
    
