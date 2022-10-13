from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accesslevelfilter


@dataclass_json
@dataclass
class ScanProvisionedProductsInput:
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AcceptLanguage' }})
    access_level_filter: Optional[accesslevelfilter.AccessLevelFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessLevelFilter' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PageToken' }})
    
