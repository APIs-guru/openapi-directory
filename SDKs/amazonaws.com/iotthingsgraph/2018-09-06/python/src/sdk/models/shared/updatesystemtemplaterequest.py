from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateSystemTemplateRequest:
    definition: DefinitionDocument = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('definition') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    compatible_namespace_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleNamespaceVersion') }})
    
