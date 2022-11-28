from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetStatisticsIDSecurity:
    oauthsecurity: shared.SchemeOauthsecurity = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class GetStatisticsID400ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetStatisticsID401ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass_json
@dataclass
class GetStatisticsID500ApplicationJSON:
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_description') }})
    

@dataclass
class GetStatisticsIDRequest:
    security: GetStatisticsIDSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class GetStatisticsIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_statistics_id_400_application_json_object: Optional[GetStatisticsID400ApplicationJSON] = field(default=None)
    get_statistics_id_401_application_json_object: Optional[GetStatisticsID401ApplicationJSON] = field(default=None)
    get_statistics_id_500_application_json_object: Optional[GetStatisticsID500ApplicationJSON] = field(default=None)
    get_statistics_response: Optional[shared.GetStatisticsResponse] = field(default=None)
    
