from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountattribute


@dataclass_json
@dataclass
class DescribeAccountAttributesResponse:
    attributes: Optional[List[accountattribute.AccountAttribute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    
