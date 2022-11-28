from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateFlowTemplateRequest:
    definition: DefinitionDocument = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    compatible_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleNamespaceVersion') }})
    
