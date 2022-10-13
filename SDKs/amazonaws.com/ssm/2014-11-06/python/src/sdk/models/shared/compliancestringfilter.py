from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import compliancequeryoperatortype_enum


@dataclass_json
@dataclass
class ComplianceStringFilter:
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: Optional[compliancequeryoperatortype_enum.ComplianceQueryOperatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    values: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Values' }})
    
