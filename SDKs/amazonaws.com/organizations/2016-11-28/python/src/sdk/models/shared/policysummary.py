from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policytype_enum


@dataclass_json
@dataclass
class PolicySummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    aws_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AwsManaged' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    type: Optional[policytype_enum.PolicyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
