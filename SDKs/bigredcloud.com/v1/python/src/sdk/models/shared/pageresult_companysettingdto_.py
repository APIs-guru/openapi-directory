from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import companysettingdto


@dataclass_json
@dataclass
class PageResultCompanySettingDto:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    items: Optional[List[companysettingdto.CompanySettingDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Items' }})
    next_page_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextPageLink' }})
    
