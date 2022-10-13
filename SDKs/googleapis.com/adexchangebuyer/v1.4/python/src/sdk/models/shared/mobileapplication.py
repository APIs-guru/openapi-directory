from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MobileApplication:
    app_store: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appStore' }})
    external_app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalAppId' }})
    
