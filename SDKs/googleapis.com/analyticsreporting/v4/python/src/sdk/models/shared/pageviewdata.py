from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PageviewData:
    page_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagePath' }})
    page_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageTitle' }})
    
