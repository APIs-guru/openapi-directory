from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeGetOptionsResponse:
    api2_controllers_web_api_me_controller_preference_options: Optional[shared.Api2ControllersWebAPIMeControllerPreferenceOptions] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
