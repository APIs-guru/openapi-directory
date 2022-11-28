from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetNamespaceDeletionStatusResponse:
    error_code: Optional[NamespaceDeletionStatusErrorCodesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorCode') }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    namespace_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceArn') }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namespaceName') }})
    status: Optional[NamespaceDeletionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
