from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UploadEntityDefinitionsRequest:
    deprecate_existing_entities: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deprecateExistingEntities') }})
    document: Optional[DefinitionDocument] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('document') }})
    sync_with_public_namespace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('syncWithPublicNamespace') }})
    
