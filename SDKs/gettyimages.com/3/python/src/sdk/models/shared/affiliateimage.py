from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import affiliateimageurls


@dataclass_json
@dataclass
class AffiliateImage:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    preview_urls: Optional[affiliateimageurls.AffiliateImageUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_urls' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
