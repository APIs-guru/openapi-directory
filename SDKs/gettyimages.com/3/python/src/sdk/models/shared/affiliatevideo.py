from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import affiliatevideourls


@dataclass_json
@dataclass
class AffiliateVideo:
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    clip_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clip_length' }})
    destination_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_url' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    preview_urls: Optional[affiliatevideourls.AffiliateVideoUrls] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_urls' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
