from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import templateversionstatus_enum


@dataclass_json
@dataclass
class UpdateEnvironmentTemplateVersionInput:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    major_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'majorVersion' }})
    minor_version: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minorVersion' }})
    status: Optional[templateversionstatus_enum.TemplateVersionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'templateName' }})
    
