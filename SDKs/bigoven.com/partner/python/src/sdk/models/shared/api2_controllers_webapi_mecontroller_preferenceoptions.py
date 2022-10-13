from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import api2_controllers_webapi_mecontroller_eatingstyle


@dataclass_json
@dataclass
class Api2ControllersWebAPIMeControllerPreferenceOptions:
    eating_style: Optional[api2_controllers_webapi_mecontroller_eatingstyle.Api2ControllersWebAPIMeControllerEatingStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EatingStyle' }})
    
