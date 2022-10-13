from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import namespacedeletionstatuserrorcodes_enum
from . import namespacedeletionstatus_enum


@dataclass_json
@dataclass
class GetNamespaceDeletionStatusResponse:
    error_code: Optional[namespacedeletionstatuserrorcodes_enum.NamespaceDeletionStatusErrorCodesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorCode' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    namespace_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceArn' }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespaceName' }})
    status: Optional[namespacedeletionstatus_enum.NamespaceDeletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
