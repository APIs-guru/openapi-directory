from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TemplateVersionResponse:
    r"""TemplateVersionResponse
    Provides information about a specific version of a message template.
    """
    
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateType') }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubstitutions') }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
