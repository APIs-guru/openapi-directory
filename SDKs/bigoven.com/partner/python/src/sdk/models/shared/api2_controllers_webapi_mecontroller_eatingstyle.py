from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import api2_controllers_webapi_mecontroller_option


@dataclass_json
@dataclass
class Api2ControllersWebAPIMeControllerEatingStyle:
    options: Optional[List[api2_controllers_webapi_mecontroller_option.Api2ControllersWebAPIMeControllerOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Options' }})
    
