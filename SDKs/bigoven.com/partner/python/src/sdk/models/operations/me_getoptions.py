from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MeGetOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    api2_controllers_web_api_me_controller_preference_options: Optional[shared.Api2ControllersWebAPIMeControllerPreferenceOptions] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
