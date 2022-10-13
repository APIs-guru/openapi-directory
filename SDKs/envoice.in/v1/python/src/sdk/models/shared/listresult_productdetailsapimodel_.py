from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ierrorinfo
from . import productdetailsapimodel


@dataclass_json
@dataclass
class ListResultProductDetailsAPIModel:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    error_messages: Optional[List[ierrorinfo.IErrorInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ErrorMessages' }})
    is_faulted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsFaulted' }})
    result: Optional[List[productdetailsapimodel.ProductDetailsAPIModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Result' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
