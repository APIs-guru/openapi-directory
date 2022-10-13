from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CampaignEmailMessage:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromAddress' }})
    html_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HtmlBody' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    
