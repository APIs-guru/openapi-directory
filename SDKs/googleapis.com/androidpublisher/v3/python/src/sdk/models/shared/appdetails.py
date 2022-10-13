from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppDetails:
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactEmail' }})
    contact_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPhone' }})
    contact_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactWebsite' }})
    default_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'defaultLanguage' }})
    
