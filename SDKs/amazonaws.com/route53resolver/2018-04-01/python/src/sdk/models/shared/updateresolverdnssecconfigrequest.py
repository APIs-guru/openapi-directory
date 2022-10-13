from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import validation_enum


@dataclass_json
@dataclass
class UpdateResolverDnssecConfigRequest:
    resource_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourceId' }})
    validation: validation_enum.ValidationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Validation' }})
    
