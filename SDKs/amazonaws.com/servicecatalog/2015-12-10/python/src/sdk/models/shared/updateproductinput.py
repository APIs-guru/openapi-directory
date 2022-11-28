from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateProductInput:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    accept_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AcceptLanguage') }})
    add_tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AddTags') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    distributor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Distributor') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Owner') }})
    remove_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RemoveTags') }})
    support_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportDescription') }})
    support_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportEmail') }})
    support_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SupportUrl') }})
    
