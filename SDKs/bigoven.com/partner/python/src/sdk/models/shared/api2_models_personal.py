from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import api2_models_location


@dataclass_json
@dataclass
class Api2ModelsPersonal:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }, 'form': { 'field_name': 'Email' }})
    location: Optional[api2_models_location.Api2ModelsLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Location' }, 'form': { 'field_name': 'Location' }})
    
