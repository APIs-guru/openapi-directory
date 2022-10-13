from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import userdetails


@dataclass_json
@dataclass
class ServiceMetadata:
    user_details: userdetails.UserDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserDetails' }})
    
