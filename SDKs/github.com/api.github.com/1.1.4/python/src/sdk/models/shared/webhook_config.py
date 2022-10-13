from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WebhookConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    insecure_ssl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
