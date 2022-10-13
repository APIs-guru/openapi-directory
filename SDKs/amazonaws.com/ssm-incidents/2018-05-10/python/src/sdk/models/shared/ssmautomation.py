from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ssmtargetaccount_enum


@dataclass_json
@dataclass
class SsmAutomation:
    document_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentName' }})
    document_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentVersion' }})
    parameters: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    target_account: Optional[ssmtargetaccount_enum.SsmTargetAccountEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetAccount' }})
    
