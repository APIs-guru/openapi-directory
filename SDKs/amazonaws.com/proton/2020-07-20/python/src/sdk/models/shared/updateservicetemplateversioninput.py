from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateServiceTemplateVersionInput:
    major_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorVersion') }})
    minor_version: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('minorVersion') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('templateName') }})
    compatible_environment_templates: Optional[List[CompatibleEnvironmentTemplateInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('compatibleEnvironmentTemplates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    status: Optional[TemplateVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
