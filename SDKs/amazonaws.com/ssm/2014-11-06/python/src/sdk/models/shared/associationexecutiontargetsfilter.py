from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import associationexecutiontargetsfilterkey_enum


@dataclass_json
@dataclass
class AssociationExecutionTargetsFilter:
    key: associationexecutiontargetsfilterkey_enum.AssociationExecutionTargetsFilterKeyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
