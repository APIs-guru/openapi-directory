from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attributevalue
from . import attributevalue


@dataclass_json
@dataclass
class AttributeValue:
    b: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'B' }})
    bool: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BOOL' }})
    bs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BS' }})
    l: Optional[List[attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'L' }})
    m: Optional[dict[str, attributevalue.AttributeValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'M' }})
    n: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'N' }})
    ns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NS' }})
    null: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NULL' }})
    s: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S' }})
    ss: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SS' }})
    
