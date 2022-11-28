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
class InAppTemplateResponse:
    r"""InAppTemplateResponse
    In-App Template Response.
    """
    
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_type: TemplateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateType') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    content: Optional[List[InAppMessageContent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Content') }})
    custom_config: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CustomConfig') }})
    layout: Optional[LayoutEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Layout') }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
