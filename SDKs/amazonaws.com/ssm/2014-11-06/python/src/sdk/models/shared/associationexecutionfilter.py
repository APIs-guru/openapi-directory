from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import associationexecutionfilterkey_enum
from . import associationfilteroperatortype_enum


@dataclass_json
@dataclass
class AssociationExecutionFilter:
    key: associationexecutionfilterkey_enum.AssociationExecutionFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    type: associationfilteroperatortype_enum.AssociationFilterOperatorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
