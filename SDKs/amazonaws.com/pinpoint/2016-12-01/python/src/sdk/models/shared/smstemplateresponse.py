from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SmsTemplateResponse:
    r"""SmsTemplateResponse
    Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
    """
    
    creation_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate') }})
    last_modified_date: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModifiedDate') }})
    template_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateName') }})
    template_type: TemplateTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateType') }})
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    default_substitutions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultSubstitutions') }})
    recommender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecommenderId') }})
    template_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TemplateDescription') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
